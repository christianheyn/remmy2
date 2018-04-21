import classnames from 'classnames';
import { unitToPx } from '../utils/unit-to-px';
import { pxToUnit } from '../utils/px-to-unit';

export const makeApp = (React) => {
    const App = (props) => {
        const $ = {
            ...React.Component.prototype,
            props,
            state: {
                unit: 'rem',
                factor: 16,
                input: '',
                output: '',
                lastTextarea: '',
                highlight: '',
            },
        };

        const getData = () => {
            window.setTimeout(() => $.setState({ highlight: '' }), 100);
            $.setState({
                highlight: ($.state.lastTextarea === 'input') ? 'output' : 'input',
            });

            return {...$.state};
        };

        const selectText = (refName) => {
            $.refs[refName].select();
        }

        $.componentWillMount = () => {
            if (window) {
                window.getData = getData;
                window.selectInput = () => selectText('input');
            }

            window.addEventListener('focus', () => {
                selectText('input');
            });
        };

        const handleInputChange = () => {
            const { unit, factor } = $.state;
            const input = $.refs.input;

            const newOutput = pxToUnit(input.value, unit, factor);

            $.setState({
                input: input.value,
                output: newOutput,
                lastTextarea: 'input',
            });
        };

        const handleOutputChange = () => {
            const { unit, factor } = $.state;
            const output = $.refs.output;

            const newInput = unitToPx(output.value, unit, factor);

            $.setState({
                input: newInput,
                output: output.value,
                lastTextarea: 'output',
            });
        };

        $.render = () => {
            const { highlight, unit } = $.state;

            const inputClassName = classnames({
                'remmy--input': true,
                'is--highlight': (highlight === 'input'),
            });

            const outputClassName = classnames({
                'remmy--output': true,
                'is--highlight': (highlight === 'output'),
            });

            return (
                <div className={'remmy--root'}>
                    <div
                      className={'drag-area'}
                      style={{ '-webkit-app-region': 'drag'}}
                    />
                    <textarea
                      rows={1}
                      className={inputClassName}
                      ref={'input'}
                      type={'text'}
                      placeholder={'css in px'}
                      value={$.state.input}
                      onChange={handleInputChange}
                      onFocus={() => selectText('input')}
                    />

                    <textarea
                      rows={1}
                      className={outputClassName}
                      ref={'output'}
                      type={'text'}
                      placeholder={`css in ${unit}`}
                      value={$.state.output}
                      onChange={handleOutputChange}
                      onFocus={() => selectText('output')}
                    />
                </div>
            );
        };

        return $;
    };

    return App;
};
