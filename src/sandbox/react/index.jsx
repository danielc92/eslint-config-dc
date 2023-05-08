import React, { Component } from 'react';


class App extends Component {
   state = {
      counters: [
         {
            id: 1,
            value: 0 
         }, {
            id: 2,
            value: 0 
         }, {
            id: 3,
            value: 0 
         }, {
            id: 4,
            value: 0 
         }
      ]
   };

   handleIncrement = (counter) => {
      const counters = [ ... this.state.counters ];
      const index = counters.indexOf(counter);

      counters[index] = {
         ... counters[index] 
      };
      counters[index].value++;
      this.setState({
         counters 
      });
   };

   handleDecrement = (counter) => {
      const counters = [ ... this.state.counters ];
      const index = counters.indexOf(counter);

      counters[index] = {
         ... counters[index] 
      };
      counters[index].value--;
      this.setState({
         counters 
      });
   };

   handleReset = () => {
      const counters = this.state.counters.map((c) => {
         c.value = 0;

         return c;
      });

      this.setState({
         counters 
      });
   };

   handleDelete = (counterId) => {
      const counters = this.state.counters.filter((c) => c.id !== counterId);

      this.setState({
         counters 
      });
   };

   handleRestart = () => {
      window.location.reload();
   };

   render () {
      return  (
         <div className="main__wrap">
            <main className="container">
               <div className="card__box">
                  <h2>hello wolrd</h2>
               </div>
            </main>
         </div>
      )
      
   }
}

export default App;