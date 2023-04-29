// this function to get the menu 
async function getMenu() {
 
  }

  fetch('https://raw.githubusercontent.com/saksham-accio/f2_contest_3/main/food.json')
  .then(response => response.json())
  .then(function(data) {
    var container = document.getElementById("container");
    console.log(data)
    for(let i=0;i<data.length;i++){
       
        
        var divBody = `
        <div class="card" onclick="takeOrder(this)">
            <img src="${data[i].imgSrc}" class="card-img" alt="" >
            <div class="content">
                <h2>${data[i].id}</h2>
                <h3>${data[i].name}</h3>
                <h3 style="color: red;"> Price: ${data[i].price}</h3>
                
                <!--<a href="#">order</a>-->
            </div>
        </div>`;
        container.innerHTML+= divBody;
    }
    
    
    })
  .catch(error => console.error(error));
  




  
  // Function to take the order
  function takeOrder(orderid) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const order=orderid;
        // const burgers = ['burger 1', 'burger 2', 'burger 3'];
        // const order = {
        //   burger1: burgers[Math.floor(Math.random() * burgers.length)],
        //   burger2: burgers[Math.floor(Math.random() * burgers.length)],
        //   burger3: burgers[Math.floor(Math.random() * burgers.length)]
        // };
        resolve(order);
      }, 2500);
    });
  }
  
  // order preparation
  function orderPrep() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const orderStatus = true;
        const paid = false;
        resolve({ orderStatus, paid });
      }, 1500);
    });
  }
  
  // pay the order
  function payOrder() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const orderStatus = true;
        const paid = true;
        resolve({ orderStatus, paid });
      }, 1000);
    });
  }
  
  //thank alert
  function thankyouFnc() {
    alert('Thank you for eating with us today!');
  }
  
  // see the Promise chaining
  getMenu()
    .then(() => takeOrder())
    .then(order => {
      console.log(order);
      
      return orderPrep();
    })
    .then(status => {
      console.log(status);
      return payOrder();
    })
    .then(status => {
      console.log(status);
      thankyouFnc();
    })
    .catch(error => console.error(error));
  
  //this Async/await
  async function runOrder() {
    try {
      await getMenu();
      const order = await takeOrder();
      console.log(order);
      const status = await orderPrep();
      console.log(status);
      const payment = await payOrder();
      console.log(payment);
      thankyouFnc();
    } catch (error) {
      console.error(error);
    }
  }
  
  runOrder();