var myform = $("form#myform");
myform.submit(function (event) {
  event.preventDefault();

  var params = myform.serializeArray().reduce(function (obj, item) {
    obj[item.name] = item.value;
    return obj;
  }, {});

  // Change to your service ID, or keep using the default service
  var service_id = "default_service";

  var template_id = "template_pl6CpcNg";
  myform.find("button").text("Gönderiliyor...");
  emailjs.send(service_id, template_id, params).then(
    function () {
      alert("Mesajınız başarıyla gönderildi!");
      myform.find("button").text("Gönderildi");
    },
    function (err) {
      alert("E-posta gönderilemedi!\r\n Yanıt:\n " + JSON.stringify(err));
      myform.find("button").text("Gönder");
    }
  );

  return false;
});
