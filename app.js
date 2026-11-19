export function buildFideRecord({ municipality, cobrade = '1.3.2.1.4', affectedPeople = 0, damagedHomes = 0 }) {
  if (!municipality || !String(municipality).trim()) throw new Error('Município obrigatório');
  return {
    municipality: String(municipality).trim(),
    cobrade: String(cobrade).trim(),
    affectedPeople: Math.max(0, Number(affectedPeople) || 0),
    damagedHomes: Math.max(0, Number(damagedHomes) || 0),
    createdAt: new Date().toISOString()
  };
}
