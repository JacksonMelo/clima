function getClima(){
    
    $.ajax({
        method: 'get',
        crossDomain: true,
        url:'http://api.openweathermap.org/data/2.5/weather?id=3468879&appid=47779e433947986ff64faaf4eae825eb',
        dataType: 'json',
        success: function (data){

            descricao = traduzirDescricao(data.weather[0].description);
            $('#situacao').html(descricao);
            
            temperatura = data.main.temp - 273;
            var tempformatada = temperatura.toFixed(2).split('.');
            $('#temperatura').html(tempformatada+"°");
            
            $('#umidade').html(data.main.humidity);
            
            $('#pressaoAr').html(data.main.pressure);
            
            $('#temperaturaMaxima').html(data.main.temp_max);
            
            $('#temperaturaMinima').html(data.main.temp_min);
            
            $('#velocidadeVento').html(data.wind.speed);
            
            var dataAmanhecer = new Date(data.sys.sunrise*1000);
            var descDataAmanhecer = dataAmanhecer.getHours()+':'+dataAmanhecer.getMinutes();
            
            $('#amanhecer').html(descDataAmanhecer);
            
            var dataAnoitecer = new Date(data.sys.sunset*1000);
            var descdataAnoitecer = dataAnoitecer.getHours()+':'+dataAnoitecer.getMinutes();
            
            $('#pordosol').html(descdataAnoitecer);
            
            var icone = data.weather[0].icon;
            var caminhoIcone = 'img/icones/'+icone+'.png';
            $('#icone').attr('src', caminhoIcone);
        },
        error:function (argument){
            alert('falha ao obter dados!');
        }
    });

}

function traduzirDescricao(descricao){
    descricaoTraduzida = "";
    
    if(descricao == "clear sky"){
        descricaoTraduzida = "Céu limpo";
    }else if(descricao == "few clouds")
    {
        descricaoTraduzida = "Poucas nuvens";
    }else if(descricao == "scattered cloudss")
    {
        descricaoTraduzida = "Poucas nuvens";
    }else if(descricao == "broken clouds")
    {
        descricaoTraduzida = "nuvens quebradas";
    }else if(descricao == "shower rain")
    {
        descricaoTraduzida = "chuva de banho";
    }else if(descricao == "rain")
    {
        descricaoTraduzida = "chuva";
    }else if(descricao == "thunderstorm")
    {
        descricaoTraduzida = "trovoada";
    }else if(descricao == "mist")
    {
        descricaoTraduzida = "névoa";
    }

    return descricaoTraduzida;
    
}

window.onload = function (){
    getClima();
};