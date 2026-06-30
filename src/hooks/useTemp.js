import { useState } from 'react'

export default function useTemp() {
    // 1. Perbaiki typo nama fungsi setter (setTemperature)
    // Gunakan string kosong '' agar kolom input bisa dihapus sampai bersih oleh user
    const [temperature, setTemperature] = useState('');
    const [scale, setScale] = useState('c');

    // 2. Terima 'value' langsung (bukan 'e') dan gunakan setTemperature
    const handleCelciusChange = (value) => {
        setTemperature(value);
        setScale('c');
    }

    const handleFahrenheitChange = (value) => {
        setTemperature(value);
        setScale('f');
    }

    const toFahrenheit = (celsius) => (celsius * 9 / 5) + 32;
    const toCelsius = (fahrenheit) => (fahrenheit - 32) * 5 / 9;

    // Nama fungsi diganti tryConvert agar tidak membingungkan dengan 'set' milik State
    const tryConvert = (temp, convert) => {
        const input = parseFloat(temp); // Menggunakan parameter 'temp'
        if (Number.isNaN(input)) return '';
        const output = convert(input);
        const rounded = Math.round(output * 1000) / 1000;
        return rounded.toString();
    }

    // 3. Perbaiki logika yang terbalik
    // Jika scale adalah 'f', berarti kolom Celcius harus menghitung konversi dari Fahrenheit
    const celcius = scale === 'f' ? tryConvert(temperature, toCelsius) : temperature;
    
    // Jika scale adalah 'c', berarti kolom Fahrenheit harus menghitung konversi dari Celsius
    const fahrenheit = scale === 'c' ? tryConvert(temperature, toFahrenheit) : temperature;

    return {
        celcius,
        fahrenheit,
        scale,
        handleCelciusChange,
        handleFahrenheitChange
    }
}