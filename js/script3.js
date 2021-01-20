var map;

DG.then(function () {
    map = DG.map('map', {
        center: [43.26274, 76.8530715],
        zoom: 13
    });
    console.log('s')
    DG.marker([43.26274, 76.8530715]).addTo(map).bindPopup('ТЦ "Car City Бакорда"');
});


function klikaj()
{
    window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' })
}