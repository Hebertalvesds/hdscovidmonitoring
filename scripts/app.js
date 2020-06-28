/* Start a new Vue project, web based. */
function get_brazilian_metrics(){
    axios
            .get(`https://covid19-brazil-api.now.sh/api/report/v1/brazil`)
            .then(response => (this.brazil_data = response.data.data));
}

function get_world_metrics(){
    axios
        .get('https://api.covid19api.com/world/total')
        .then(response => (this.world_data = response.data));
}

function get_global_ranking(){
    axios
        .get('https://covid19-brazil-api.now.sh/api/report/v1/countries')
        .then(response => (this.global_ranking = response.data.data.sort((a, b)=>b.confirmed - a.confirmed)));
}

const app = new Vue({
    el: '#app',
    data: {
        brazil_data: Array(),
        world_data: Array(),
        global_ranking: Array(),
        top_10: Array(),
        data: '',
        about: false
    },
    methods:{
        get_brazilian_metrics,
        get_world_metrics,
        get_global_ranking,
        display_date_formated: function(){
            let dt;
            var mes;

            switch(new Date().getMonth()){
                case 0:
                    mes = 'Janeiro'
                    break;
                case 1:
                    mes = 'Fevereiro'
                    break;
                case 2:
                    mes = 'Março'
                    break;
                case 3:
                    mes = 'Abril'
                    break;
                case 4:
                    mes = 'Maio'
                    break;
                case 5:
                    mes = 'Junho'
                    break;
                case 6:
                    mes = 'Julho'
                    break;
                case 7:
                    mes = 'Agosto'
                    break;
                case 8:
                    mes = 'Setembro'
                    break;
                case 9:
                    mes = 'Outubro'
                    break;
                case 10:
                    mes = 'Novembro'
                    break;
                case 11:
                    mes = 'Dezembro'
                    break;
            }

            switch(new Date().getDay()){
                case 0:
                    dt = 'Domingo '
                    break;
                case 1:
                    dt = 'Segunda '
                    break;
                case 2:
                    dt = 'Terça '
                    break;
                case 3:
                    dt = 'Quarta '
                    break;
                case 4:
                    dt = 'Quinta '
                    break;
                case 5:
                    dt = 'Sexta '
                    break;
                case 6:
                    dt = 'Sábado '
                    break;
                
            }

            this.data = `${dt} ${new Date().getDate()} de ${mes} de ${new Date().getFullYear()}`;
        }
    },
    mounted() {
        get_brazilian_metrics.call(this);
        get_world_metrics.call(this);
        get_global_ranking.call(this);
        this.display_date_formated();
        Metro.init();
        setInterval(function(){
            get_brazilian_metrics.call(this);
            get_world_metrics.call(this);
            get_global_ranking.call(this);
        }, 600000)
    }
});