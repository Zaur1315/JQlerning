$(document).ready(function () {

    //Выбор цвета:

    let $s22img = $('#s22img');

    $('.s22color').on('click', function () {
        let imgpath = $(this).attr('data-img-path');

        $s22img.fadeOut(200, function () {
            $s22img
                .attr('src', imgpath)
                .fadeIn(200);
        })
    })

    //Калькулятор цены:

    let mname,
        mPriceHonder,
        mDollar,
        mScept,
        mComplect,
        mPrice;

    mname = $('#s22name');
    mPriceHonder = $('#s22Price')
    mDollar = parseInt(mPrice)/1.7;

    mPrice = 0;
    mScept = '';

    function calculatePhone(){

        mPrice = parseInt( $('input[name = storge]:checked','#block1').val());

        mPrice +=parseInt( $('input[name = acces]:checked','#block2').val());

        mPrice +=parseInt( $('input[name = kompl]:checked','#block3').val());

        // alert(mPrice);
        mPriceHonder.text(addSpace(mPrice) + ' AZN')
    }
    $('.radioBlock input').on('change',function(){
        calculatePhone()
        mComplect()
    })

    calculatePhone()

 //Вывод комплектации к заголовку:

    mComplect = function(){

        mScept =  $('input[name = storge]:checked + label','#block1').text();

        mScept += $('input[name = acces]:checked + label','#block2').text();

        mScept += $('input[name = kompl]:checked + label','#block3').text();       
        
       $('#s22name').text(mScept);
        // alert(mScept);
    }



    mComplect()

    function addSpace(number){
        number+= ' ';
        x = number.split('.');
        x1 = x[0];
        x2 = x.length > 1 ? '.' + x[1] : ' ';
        let rgx = /(\d+)(\d{3})/;
        while (rgx.test(x1)) {
            x1 = x1.replace(rgx, '$1' + ' ' + '$2');
        }

        return x1 + x2;
    }


    // let convertor = "https://query.yahooapis.com/v1/public/yql?q=select%20rate%2Cname%20from%20csv%20where%20url%3D'http%3A%2F%2Fdownload.finance.yahoo.com%2Fd%2Fquotes%3Fs%3D" + from_currency + to_currency + "%253DX%26f%3Dl1n'%20and%20columns%3D'rate%2Cname'&format=json"
    let aZn = 0;

    $.ajax({
        url: convertor,
        cache: false,
        success: function(html){
            console.log(html);
        }
    })
});