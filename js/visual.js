$(function(){
                    $(".visualBOX").html('<img src="images/breaking_1.png" alt=""/>').append('<span>Lorem ipsum dolor sit amet, consectetur Nulla quis lorem neque, mattis venenatis lectus.</span>');
                    $(".visualLIST li a").click(function(){
                        $(".visualBOX").html('<img src="'+ $(this).attr("href")+ '" alt=""/>').append('<span>Lorem ipsum dolor sit amet, consectetur Nulla quis lorem neque, mattis venenatis lectus.</span>');
                        return false;
                    });
                });