
import {shallow} from 'enzyme';
import { AddCategory } from '../../components/AddCategory';
describe('Pruebas en el componente <AddCategory />', () => {
    const setCategory = () => {}
    const wrapper = shallow(<AddCategory  setCategories={setCategory}/>);
    test('EL componente <AddCategory /> debería de mostrarse correctamente ', () => { 
        expect(wrapper).toMatchSnapshot();
    });

    test('Deberia de cambiar la caja de texto',() => {
        const input = wrapper.find('input');
        // console.log(input.html());
        const value = 'Hola mundo';
        input.simulate('change',{target:{value}});
        expect(wrapper.find('p').text().trim()).toBe(value);
    });
});