define [
  'marionette'
  'modules/carousel/views/carouselItemView'
  'text!modules/carousel/templates/carouselTemplate.html'
  'bootstrap/carousel'
], (Marionette, CarouselItemView, CarouselTemplate) ->
  class CarouselView extends Marionette.CompositeView
    itemView: CarouselItemView
    itemViewContainer: '.carousel-inner'
    template: _.template(CarouselTemplate)

    onRender: ->
      console.log 'render'
      @$el.carousel().carousel('next')
