import { NumericFormat } from 'react-number-format';
import { Container } from './styles';

export function InputPrice({ value, onChange }) {
  return (
    <Container>
        <NumericFormat
            required
            value={value}
            displayType={'input'}
            thousandSeparator={'.'}
            decimalSeparator={','}
            decimalScale={2}
            fixedDecimalScale={true}
            allowNegative={false}
            onValueChange={(values) => {
                const { formattedValue, value: floatValue } = values;
                onChange({
                target: {
                    value: formattedValue,
                    floatValue: floatValue
                }
                });
            }}
            placeholder="00,00"
        />
    </Container>
  );
}