
const jsonfile = {
    "jsonarray": [
        {
            "Mes":'Enero',
            "Precio":"5",
            "Promos": "1",
        },
        {
            "Mes":'Febrero',
            "Precio":"5",
            "Promos": "1",
        },
        {
            "Mes":'Marzo',
            "Precio":"5",
            "Promos": "1",
        },
        {
            "Mes":'Abril',
            "Precio":"4",
            "Promos": "2",
        },
        {
            "Mes":'Mayo',
            "Precio":"4",
            "Promos": "3",
        },
        {
            "Mes":'Junio',
            "Precio":"4",
            "Promos": "3",
        },
        {
            "Mes":'Julio',
            "Precio":"6",
            "Promos": "1",
        },
        {
            "Mes":'Agosto',
            "Precio":"6",
            "Promos": "1",
        },
        {
            "Mes":'Septiembre',
            "Precio":"4",
            "Promos": "4",
        },
        {
            "Mes":'Octubre',
            "Precio":"4",
            "Promos": "4",
        },
        {
            "Mes":'Noviembre',
            "Precio":"4",
            "Promos": "5",
        },
        {
            "Mes":'Diciembre',
            "Precio":"5",
            "Promos": "1",
        }]
    };
    const labels = jsonfile.jsonarray.map(function(e) {
        return e.Mes;
    });
    const dataPrecio = jsonfile.jsonarray.map(function(e) {
        return +e.Precio.replace(',',''); 
    });
    const dataPromos = jsonfile.jsonarray.map(function(e) {
        return +e.Promos.replace(',','');
    });
    const canvas = document.querySelector('canvas');
    const ctx = canvas.getContext('2d');
    const config = {
        type: 'bar',
        data: {
            labels: labels,
            datasets: [{
                label: 'Precios en relacion a la temporada Alta o Baja',
                data: dataPrecio,
                backgroundColor: 'rgba(0, 119, 204, 0.8)'
            },
            {
                label: 'Posibilidad de Promos o Descuentos',
                data: dataPromos,
                backgroundColor: 'rgba(230, 119, 204, 0.8)'
            }]
        }
    };
    const chart = new Chart(ctx, config);
    
    const logout = () => {
        window.location.href = 'index.html';
    };
    
    const logoutt = document.querySelector ('#logoutt');
    logoutt.addEventListener('click',logout);



