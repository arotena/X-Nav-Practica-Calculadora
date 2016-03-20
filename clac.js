$( document ).ready(function() {
      valor = $('#numeros').val();

      $("#uno").click(function(event){
        valor = $('#numeros').val();
        valor = valor + "1";
        $("#numeros").val(valor);
      });

      $("#dos").click(function(event){
        valor = $('#numeros').val();
        valor = valor + "2";
        $("#numeros").val(valor);
      });

      $("#tres").click(function(event){
        valor = $('#numeros').val();
        valor = valor + "3";
        $("#numeros").val(valor);
      });

      $("#cuatro").click(function(event){
        valor = $('#numeros').val();
        valor = valor + "4";
        $("#numeros").val(valor);
      });

      $("#cinco").click(function(event){
        valor = $('#numeros').val();
        valor = valor + "5";
        $("#numeros").val(valor);
      });

      $("#seis").click(function(event){
        valor = $('#numeros').val();
        valor = valor + "6";
        $("#numeros").val(valor);
      });

      $("#siete").click(function(event){
        valor = $('#numeros').val();
        valor = valor + "7";
        $("#numeros").val(valor);
      });

      $("#ocho").click(function(event){
        valor = $('#numeros').val();
        valor = valor + "8";
        $("#numeros").val(valor);
      });

      $("#nueve").click(function(event){
        valor = $('#numeros').val();
        valor = valor + "9";
        $("#numeros").val(valor);
      });

      $("#cero").click(function(event){
        valor = $('#numeros').val();
        valor = valor + "0";
         $("#numeros").val(valor);
      });

      $("#punto").click(function(event){
        valor = $('#numeros').val();
        valor = valor + ".";
         $("#numeros").val(valor);
      });

      $("#doble").click(function(event){
        valor = $('#numeros').val();
        valor = valor + "00";
         $("#numeros").val(valor);
      });

      $("#negativo").click(function(event){
        valor = $('#numeros').val();
        valor = valor + "-";
         $("#numeros").val(valor);
      });

      $("#suma").click(function(event){
        valor = $('#numeros').val();
        valor = valor + "+";
         $("#numeros").val(valor);
      });

      $("#resta").click(function(event){
        valor = $('#numeros').val();
        valor = valor + "-";
         $("#numeros").val(valor);
      });

      $("#por").click(function(event){
        valor = $('#numeros').val();
        valor = valor + "*";
         $("#numeros").val(valor);
      });

      $("#dividir").click(function(event){
        valor = $('#numeros').val();
        valor = valor + "/";
         $("#numeros").val(valor);
      });

      $("#borrar").click(function(event){
        valor = "";
         $("#numeros").val(valor);
      });
      $("#del").click(function(event){
        valor = valor.substring(0,valor.length-1);
         $("#numeros").val(valor);
      });

      $("#numeros").keypress(function(event){
        valor = $('#numeros').val();
        if(event.which == 13){
          valor = eval(valor);
        }
        $("#numeros").val(valor);
      });

      $("#igual").click(function(event){
        valor = $('#numeros').val();
        var resul = eval(valor);
        $("#numeros").val(resul);
      });

  });
