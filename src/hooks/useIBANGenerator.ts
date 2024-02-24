import {useState, useEffect} from 'react';
export enum AccountType {
    seporde,
    tashilat
}
const useIBANGenerator = (initialValues: {
    accountNumber: string,
    bankId: string,
    accountType: AccountType,
    countryCode: string
}) => {
    const [iban, setIBAN] = useState('');

    useEffect(() => {
        const Dictionary: Map<string, number> = new Map([
            ['A', 10],
            ['B', 11],
            ['C', 12],
            ['D', 13],
            ['E', 14],
            ['F', 15],
            ['G', 16],
            ['H', 17],
            ['I', 18],
            ['J', 19],
            ['K', 20],
            ['L', 21],
            ['M', 22],
            ['N', 23],
            ['O', 24],
            ['P', 25],
            ['Q', 26],
            ['R', 27],
            ['S', 28],
            ['T', 29],
            ['U', 30],
            ['V', 31],
            ['W', 32],
            ['X', 33],
            ['Y', 34],
            ['Z', 35],
        ]);

        const calculateCD = (): string => {
            const temp: string = `${calculateBBAN()}${Dictionary.get(initialValues.countryCode[0])!}${Dictionary.get(initialValues.countryCode[1])!}00`;
            const a: string[] = temp.split('');
            let r: number = 0;

            a.forEach((v: string) => {
                r = (((r * 10) + parseInt(v)) % 97);
            });

            const cd: number = 98 - r;
            return cd.toString();
        }

        const calculateBBAN = (): string => {
            return `${initialValues.bankId}${initialValues.accountType.toString()}${calculateZeros()}${initialValues.accountNumber}`;
        }

        const calculateZeros = (): string => {
            let zeros: string = '';
            const numberOfZeros: number = 18 - initialValues.accountNumber.length;

            for (let i = 0; i < numberOfZeros; i++) {
                zeros += '0';
            }

            return zeros;
        }

        const calculateIBAN = (): string => {
            return `${initialValues.countryCode}${calculateCD()}${calculateBBAN()}`;
        }

        const ibanValue = calculateIBAN();
        setIBAN(ibanValue);
    }, [initialValues]);

    return iban;
};

export default useIBANGenerator;
