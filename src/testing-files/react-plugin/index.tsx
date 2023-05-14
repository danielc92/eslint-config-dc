import React from 'react';

const myComponent = () => {

    const [a,aa] = useState("blah")
    React.useEffect(() => {
      const n = a
    console.log(n) 
},[])
   return < div    >
    <NOT_PASCAL/>
          </div>;
};

const NOT_PASCAL = () => <div>very bad</div>
