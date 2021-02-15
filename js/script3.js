var map;

    DG.then(function () {
        map = DG.map('map', {
            center: [43.237955, 76.823661],
            zoom: 13
        });

        DG.marker([43.237955, 76.823661]).addTo(map).bindPopup('ТЦ Car city');
    });