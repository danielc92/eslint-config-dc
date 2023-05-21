import React from 'react';

const myComponent = () => {

    const [a,aa] = useState("blah")
    React.useEffect(() => {
      const n = a
    console.log(n) 
},[])

const handleclick = React.useCallback((e: React.MouseEvent<HTMLInputElement>) => {
  nn(e.pageX);
}, []);

   return < div    >
    <input onChange={handleclick}/>
    <NOT_PASCAL/>
          </div>;
};

const NOT_PASCAL = () => <div>very bad</div>
