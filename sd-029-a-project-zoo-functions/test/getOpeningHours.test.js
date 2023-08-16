const getOpeningHours = require('../src/getOpeningHours');

describe('Testes da função getOpeningHours', () => {
  it('Testando se retorna The zoo is closed apra horario padrão', () => {
    expect(getOpeningHours('monday', '12:00-am')).toBe('The zoo is closed');
  });
  it('Testando se retorna The zoo is open para horario padrão', () => {
    expect(getOpeningHours('tuesday', '09:00-am')).toBe('The zoo is open');
  });
  it('Testando se retorna The zoo is open se for passado em camelcase WeDnEsDay 12:00-PM', () => {
    expect(getOpeningHours('WeDnEsDay', '12:30-PM')).toBe('The zoo is open');
  });
  it('Teste de exceções para argumentos incorretos - Dia inválido', () => {
    expect(() => getOpeningHours('Sex', '09:00-PM')).toThrow('The day must be valid. Example: Monday');
  });
  it('Teste de exceções para argumentos incorretos - Abreviação errada', () => {
    expect(() => getOpeningHours('Friday', '09:00-ZL')).toThrow('The abbreviation must be \'AM\' or \'PM\'');
  });
  it('Teste de exceções para argumentos incorretos - Hora inválida', () => {
    expect(() => getOpeningHours('Saturday', 'C6:00-PM')).toThrow('The hour should represent a number');
  });
  it('Teste de exceções para argumentos incorretos - Minutos maior que 60', () => {
    expect(() => getOpeningHours('Friday', '11:69-AM')).toThrow('The minutes must be between 0 and 59');
  });
  it('Teste de exceções para argumentos incorretos - Minutos inválidos', () => {
    expect(() => getOpeningHours('Friday', '09:R7-PM')).toThrow('The minutes should represent a number');
  });
  it('Teste de exceções para argumentos incorretos - Hora maior que 12', () => {
    expect(() => getOpeningHours('Friday', '69:00-AM')).toThrow('The hour must be between 0 and 12');
  });

  it('Verificando se é retornado o objeto indicado caso não seja inserido nenhum argumento', () => {
    expect(getOpeningHours()).toEqual({
      Tuesday: { open: 8, close: 6 },
      Wednesday: { open: 8, close: 6 },
      Thursday: { open: 10, close: 8 },
      Friday: { open: 10, close: 8 },
      Saturday: { open: 8, close: 10 },
      Sunday: { open: 8, close: 8 },
      Monday: { open: 0, close: 0 },
    });
  });
});
