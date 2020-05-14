$(document).ready(function()
        {
            $('#mycarousel').carousel({interval: 2000 });
            $('#carouselButton').click(function(){
                if ($('#carouselButton').children('span').hasClass('fa-pause')){
                    $('#mycarousel').carousel('pause');
                    $('#carouselButton').children('span').removeClass('fa-pause')
                    $('#carouselButton').children('span').addClass('fa-play')
                }
                else if ($('#carouselButton').children('span').hasClass('fa-play')){
                    $('#mycarousel').carousel('cycle');
                    $('#carouselButton').children('span').removeClass('fa-play')
                    $('#carouselButton').children('span').addClass('fa-pause')
                }
            });
        });

        $(document).ready(function(){
            $('#loginlink').click(function(){
                $('#loginModal').modal('show')
                
            });
            $('#dismiss1').click(function(){
                $('#loginModal').modal('hide')
            });
            $('#dismiss2').click(function(){
                $('#loginModal').modal('hide')
            });
        });

        $(document).ready(function(){
            $('#reservebutton').click(function(){
                $('#reserveModal').modal('show')
            });
            $('#rdismiss1').click(function(){
                $('#reserveModal').modal('hide')
            });
            $('#rdismiss2').click(function(){
                $('#reserveModal').modal('hide')
            });
        });
