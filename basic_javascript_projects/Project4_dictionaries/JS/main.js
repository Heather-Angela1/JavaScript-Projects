var Dictionary = {
    USA: 'Washington, D.C.',
    Canada: 'Ottawa',
    Ecuador: 'Quito',
    Brazil: 'Brasília',
    Argentina: 'Buenos Aires',
    France: 'Paris',
    Germany: 'Berlin',
    UnitedKingdom: 'London',
    Italy: 'Rome',
    Spain: 'Madrid',
    Japan: 'Tokyo',
    China: 'Beijing',
    India: 'New Delhi',
    Australia: 'Canberra',
  };

  function showCapital() {
    var capital = Dictionary.Ecuador;
    delete Dictionary.Ecuador;
    document.getElementById("Dictionary").innerHTML = `The capital of Ecuador is: ${capital}`;
  }