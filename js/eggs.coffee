# let's add some easter eggs, b/c they are cool
temp_scroll = 0
current_scroll = 0

$(document).ready () ->

    # scrolling effect
    $nav = $('#navigation')

    about_top = $nav.height()
    creations_top = about_top + $('section#about').height()
    resume_top = creations_top + $('section#creations').height()
    blog_top = resume_top + $('section#resume').height()
    photos_top = blog_top + $('section#blog').height()
    photos_bottom = photos_top + $('section#photos').height()

    old_top = 'null'
    new_top = 'null'

    $(window).bind 'scroll', () ->
        current_scroll = $(this).scrollTop()

        # Set the current scroll point
        animate_eggs.current_scroll = current_scroll
        
        # Set our scroll speed property
        animate_eggs.scroll_speed = current_scroll - temp_scroll
        
        # We're at the top of the page, set all the default positions
        if current_scroll <= 0 
            animate_eggs.set_default_positions()
            return false

        # scrolling up/down
        if temp_scroll < current_scroll
            animate_eggs.scroll_direction = 'down'
        else if temp_scroll > current_scroll
            animate_eggs.scroll_direction = 'up'

        if current_scroll >= photos_top && current_scroll < photos_bottom
            animate_eggs.photos_area()


        if current_scroll <= photos_top
            animate_eggs.set_start_position animate_eggs.tux_egg

        if current_scroll > photos_bottom
            animate_eggs.set_stop_position animate_eggs.tux_egg


        temp_scroll = current_scroll

        false


    animate_eggs =
        tux_egg: $('div#tux-egg')

        scroll_speed: 0
        scroll_direction: 'down'
        current_scroll: 0

        init: ->
            @set_default_positions()

        # tux_egg: ->

        animate_down: (element,travel_distance) ->
            direction = element.data('direction')
            start = element.data('start')
            stop = element.data('stop')
            position = direction
            step = ((start - stop)/travel_distance) * @scroll_speed
            position_value = parseInt (element.css position), 10

            if position_value < start || position_value > stop
                return false
            else
                element.css position, position_value - step

        animate_up: (element,travel_distance) ->
            direction = element.data('direction')
            start = element.data('start')
            stop = element.data('stop')
            position = direction
            step = ((start - stop)/travel_distance) * @scroll_speed
            position_value = element.css position)
        
            if position_value < start || position_value > stop
                return false
            else
                element.css position, position_value - step

        set_default_positions: ->
            @set_start_position(@tux_egg)

        photos_area: () ->
            prev_area_position = photos_top
            curr_area_position = photos_top
            next_area_position = photos_bottom
            travel_distance = curr_area_position

            if @current_scroll <= curr_area_position && @current_scroll > next_area_position 
                return false

            # position elements to post-animated state
            if @current_scroll >= next_area_position
                @set_stop_position @tux_egg
                return false

            if @scroll_direction is 'down'
                @animate_down @tux_egg, travel_distance
            else if @scroll_direction is 'up'
                @animate_up @tux_egg, travel_distance

        set_start_position: (element) ->
            direction = element.data('direction')
            start = element.data('start')
            position = direction
      
            element.css position, start

        set_stop_position: (element) ->
            direction = element.data('direction')
            stop = element.data('stop')
            position = direction
      
            element.css position, stop


    if !document.location.hash then animate_eggs.init()
    false
        