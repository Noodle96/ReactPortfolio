
import {shallow} from 'enzyme';
import { AddCategory } from '../../components/AddCategory';
describe('Pruebas en el componente <AddCategory />', () => {
    test('EL componente <AddCategory /> debería de mostrarse correctamente ', () => { 
        const setCategory = () => {}
        const wrapper = shallow(<AddCategory  setCategories={setCategory}/>);
        expect(wrapper).toMatchSnapshot();
     })
});