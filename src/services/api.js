const callToApi = () => {
    return fetch('https://beta.adalab.es/pw-recursos/apis/adalabers-v1/promo-patata.json')
      .then((response) => response.json())
      .then((response) => {
        const result = {
          id: response.results.id,
          name: response.results.name,
          counselor: response.results.counselor,
          promo: response.results.promo,
          speciality: response.results.speciality,
        };
        return result;
      });
  };
  
  export default callToApi;