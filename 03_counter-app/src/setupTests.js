// import '@testing-library/jest-dom/extend-expect';

import Enzyme from 'enzyme';
import Adapter from '@cfaester/enzyme-adapter-react-18';
import {createSerializer} from 'enzyme-to-json';

Enzyme.configure({ adapter: new Adapter() });
expect.addSnapshotSerializer(createSerializer({mode: 'deep'}));