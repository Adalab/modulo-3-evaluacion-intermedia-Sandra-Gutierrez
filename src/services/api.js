const callToApi = () => {
    return fetch('https://beta.adalab.es/pw-recursos/apis/adalabers-v1/promo-patata.json')
      .then((response) => response.json())
      .then((response) => {
        return response.results;
      });
  };
  
  export default callToApi;