// /*****个位计划*****/
$(function () {
    function postall() {
        $.ajax({
            url:Ajaxurl+"get_lottery?type=1",
            type:"post",
            cache:false,
            async:true,
            dataType:"json",
            success:function (data) {
                if(data!=null) {
                    var period=data.period,
                        analysis=data.award_number;
                    $('.cqssc-nums').empty();
                    var a= document.getElementById('qishu').innerText;
                    for(var i=0;i<analysis.length;i++){
                        if(a!=period){
                            $('.cqssc-nums').empty();
                            $('.cqssc-nums').append(`<span class="wow rollIn animated" data-wow-delay="0.5s">${analysis[0]}</span>`);
                            $('.cqssc-nums').append(`<span class="wow rollIn animated" data-wow-delay="0.6s">${analysis[1]}</span>`);
                            $('.cqssc-nums').append(`<span class="wow rollIn animated" data-wow-delay="0.7s">${analysis[2]}</span>`);
                            $('.cqssc-nums').append(`<span class="wow rollIn animated" data-wow-delay="0.8s">${analysis[3]}</span>`);
                            $('.cqssc-nums').append(`<span class="wow rollIn animated" data-wow-delay="0.9s">${analysis[4]}</span>`);

                        }else{
                            $('.cqssc-nums').empty();
                            $('.cqssc-nums').append(`<span style="animation:bounce 0.3s;animation-direction: alternate;animation-iteration-count: infinite;">${analysis[0]}</span>`);
                            $('.cqssc-nums').append(`<span style="animation:bounce 0.4s;animation-direction: alternate;animation-iteration-count: infinite;">${analysis[1]}</span>`);
                            $('.cqssc-nums').append(`<span style="animation:bounce 0.5s;animation-direction: alternate;animation-iteration-count: infinite;">${analysis[2]}</span>`);
                            $('.cqssc-nums').append(`<span style="animation:bounce 0.6s;animation-direction: alternate;animation-iteration-count: infinite;">${analysis[3]}</span>`);
                            $('.cqssc-nums').append(`<span style="animation:bounce 0.7s;animation-direction: alternate;animation-iteration-count: infinite;">${analysis[4]}</span>`);
                        }
                    }
                    $('#qishu').text(period);
                }
            }
        });
    }
    postall();
    setInterval(postall,3000);
});