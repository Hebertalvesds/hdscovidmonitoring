'use strict';
Vue.component('info-aggregate', {
    props: ['title', 'icon','total', 'deaths', 'recovered', 'classes'],
    template: '<div :class="classes">'
            + '<div class="title"><img :src="icon" class="icon">{{title}}</div>'
            + '<div class="row p-2">'
            + '<div class="info cell-12 cell-lg-4 p-0"><span class="title">Total de casos</span><span class="count">{{total}}</span></div>'
            + '<div class="info cell-12 cell-lg-4 p-0"><span class="title fg-crimson">Mortes</span><span class="count">{{deaths}}</span></div>'
            + '<div class="info cell-12 cell-lg-4 p-0"><span class="title fg-emerald">Recuperados</span><span class="count">{{recovered}}</span></div>'
            + '</div></div>'
});