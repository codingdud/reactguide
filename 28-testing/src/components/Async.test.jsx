import {screen, render} from '@testing-library/react';
import Async from './Async';

describe('Async components',()=>{
    test('render post',async()=>{
        //arange
        window.fetch=jest.fn().mockResolvedValueOnce({
            json:async()=>[{id:'p1',title:"first peron shotting game"}]
        })
        render(<Async/>)
        //act

        //assert
        const listItemElement = await screen.findAllByRole('listitem');
        expect(listItemElement).not.toHaveLength(0);
    })
})