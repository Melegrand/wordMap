
  async function data() {
    const res  = await fetch ('http://localhost:3000/api/data')
    const result = await res.json();

    const resCode = await fetch ('http://localhost:3000/api/dataCode')
    const resultCode = await resCode.json();

    const random_hex_color_code = () => {
      let n = (Math.random() * 0xfffff * 1000000).toString(16);
      return '#' + n.slice(0, 6);
    };

    const formattedData = {};

    result.forEach(country => {
      formattedData[country.iso2] = {
        nom: country.nom,
        iso2: country.iso2,
        capitale: country.capitale,
        color: random_hex_color_code(),
        link: `/pays/${country.iso2.toLowerCase()}`
      };
    });

      map = new svgMap({
        targetElementID: 'svgMap',
        // initialPan: {x: "48", y: "2"},
        initialZoom: 1,
        hideFlag: false,
        colorMax :  '#d800ff',
        colorMin :  '#00ffd1',
        showZoomReset	: true,
      
        data : {
          data  :{
              nom: {
                name: 'nom',
              },

              capitale: {
                name: 'capitale'
              },

              iso2 : {
                name: 'iso2'
              }
          },
         
        applyData: 'nom',
        
        values : formattedData,
        
      },
    })

    id="svgMap-map-country-AL"
    for (const res of result) { 
      const element = document.getElementById(`svgMap-map-country-${res.iso2}`);
      element.style.display='none';
    }
    
    const uniqueMap = document.getElementById(`svgMap-map-country-${resultCode[0].iso2}`)
    uniqueMap.style.display='flex'

    
}

data()