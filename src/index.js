import $ from "jquery"

   class Ghart {

        constructor( name, option ) {
            this.data = option.data;
            this.height_colum = 50;
            this.name = name + " .horizontal-elems > ul > li > span";
            this.elems = $(this.name);

            this.statistic( { data: this.data,
                step: this.height_colum,
                _this: this,
                arr_elems: this.elems
            });
        }

        statistic( options ) {

            $(options.arr_elems).each(function( index ) {

                var get_percents = options.data[index].info_kvartal;
                var result = parseInt(get_percents);
                var show_result = 0;
                for (var i = 10; i <= result; i += 10) {

                    show_result += options.step;
                }

                options._this.animateColumns({
                    elem: $(this),
                    step: show_result
                });

            });

        }

        animateColumns( options ) {
            options.elem.animate( {top: "-" + options.step + "px",
                height: options.step + "px",

            }, 1000);

        }

    }

  export default Ghart;




