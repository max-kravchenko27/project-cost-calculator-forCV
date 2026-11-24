const ROLES = [
  { id: 'qa',  name: 'QA',              color: '#2f6bff' },
  { id: 'dev1', name: 'Dev 1',          color: '#12a594' },
  { id: 'dev2', name: 'Dev 2',          color: '#f2a516' },
  { id: 'cm',  name: 'Content Manager', color: '#d6409f' }
];
const STORE_KEY = 'pcc-state-v1';

const money = new Intl.NumberFormat('en-US', {
  style: 'currency', currency: 'USD', maximumFractionDigits: 2
});
const num = v => {
  const n = parseFloat(String(v).replace(',', '.'));
  return Number.isFinite(n) && n > 0 ? n : 0;
};

if (navigator.platform.toLowerCase().includes('mac')) document.body.classList.add('mac');

const rowsEl = document.getElementById('rows');
const bufferEl = document.getElementById('buffer');

ROLES.forEach(r => {
  const row = document.createElement('div');
  row.className = 'row';
  row.innerHTML = `
    <span class="role"><i style="background:${r.color}"></i>${r.name}</span>
    <input type="number" min="0" step="0.5" placeholder="0" data-id="${r.id}" data-f="hours" aria-label="${r.name}: години">
    <input type="number" min="0" step="1" placeholder="0" data-id="${r.id}" data-f="rate" aria-label="${r.name}: рейт">
    <output class="right" id="sum-${r.id}">$0</output>`;
  rowsEl.appendChild(row);
});

function load() {
  try {
    const s = JSON.parse(localStorage.getItem(STORE_KEY));
    if (!s) return;
    document.querySelectorAll('[data-id]').forEach(i => {
      const v = s[i.dataset.id + '.' + i.dataset.f];
      if (v !== undefined) i.value = v;
    });
    if (s.buffer !== undefined) bufferEl.value = s.buffer;
  } catch (e) { /* порожній стан */ }
}

function save() {
  const s = { buffer: bufferEl.value };
  document.querySelectorAll('[data-id]').forEach(i => {
    s[i.dataset.id + '.' + i.dataset.f] = i.value;
  });
  try { localStorage.setItem(STORE_KEY, JSON.stringify(s)); } catch (e) {}
}

function calc() {
  let hours = 0, subtotal = 0;
  const parts = ROLES.map(r => {
    const h = num(document.querySelector(`[data-id="${r.id}"][data-f="hours"]`).value);
    const rate = num(document.querySelector(`[data-id="${r.id}"][data-f="rate"]`).value);
    const sum = h * rate;
    hours += h; subtotal += sum;
    document.getElementById('sum-' + r.id).textContent = money.format(sum);
    return { ...r, sum };
  });

  const buffer = num(bufferEl.value);
  const bufferAmount = subtotal * buffer / 100;
  const total = subtotal + bufferAmount;

  document.getElementById('hours').textContent = hours.toLocaleString('uk-UA');
  document.getElementById('subtotal').textContent = money.format(subtotal);
  document.getElementById('bufferAmount').textContent = money.format(bufferAmount);
  document.getElementById('total').textContent = money.format(total);

  const bar = document.getElementById('bar');
  const legend = document.getElementById('legend');
  bar.innerHTML = '';
  legend.innerHTML = '';
  parts.filter(p => p.sum > 0).forEach(p => {
    const pct = p.sum / subtotal * 100;
    const seg = document.createElement('span');
    seg.style.width = pct + '%';
    seg.style.background = p.color;
    bar.appendChild(seg);
    const li = document.createElement('li');
    li.innerHTML = `<i style="background:${p.color}"></i>${p.name} ${Math.round(pct)}%`;
    legend.appendChild(li);
  });
  save();
}

document.addEventListener('input', calc);
document.getElementById('reset').addEventListener('click', () => {
  document.querySelectorAll('[data-id]').forEach(i => i.value = '');
  bufferEl.value = 10;
  calc();
});

load();
calc();
