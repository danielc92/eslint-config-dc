import React from 'react';
import { render, screen } from '@testing-library/react';

const Foo = () => {
    return (
       <div>
          <h2 data-testid="HEADING_2" className="title">Title</h2>
          <p data-testid="PARAGRAPH" className="text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus odio atque, facere laudantium necessitatibus id ea tenetur, at earum molestias exercitationem alias? Iste, iure sapiente nam obcaecati illum necessitatibus facere?</p>
       </div>
    );
 };

describe('Foo suite', () => {
   it('should render successfully', async () => {
      render(<Foo />);

      const element = screen.getByTestId('HEADING_2');

      expect(element.classList).toContain("_")
      expect(element.style.color).toEqual("blue")
   });
});
