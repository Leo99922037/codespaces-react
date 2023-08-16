import { Button, Input, Space,} from 'antd';
import { useForm } from 'antd/es/form/Form';
import { useState } from 'react';
function Guessthenumber() {
    const [text, setText] = useState('');
    // state uurchluhud setResult-iig ashiglna
    const [result, setResult] = useState('');
    const [random, setRandom] = useState(Math.floor(Math.random() * 100) + 1);
    const [aldsan, setAldsan] = useState(0);
    const [aldsantoonuud, setAldsantoonuud] = useState([]);
    function onChanged(e) {
        const text = e.target.value;
        console.log(text);
        setText(text)
    }
    function onClicked() {
        //const text = e.target.value;
        //console.log('Clicked'); 
        
        
        if (random > text){
            setResult('Арай бага байна')
            setAldsan(aldsan + 1)   
            setAldsantoonuud([...aldsantoonuud,text ]) 
            }
        else if (random < text){
            setResult('Арай их байна')
            setAldsan(aldsan + 1)    
            setAldsantoonuud([...aldsantoonuud,text ]) 
            }

        else if (random == text)
        setResult('ТА ЗӨВ ТААЛАА')  

    else setResult('"1-100"-ийн хооронд байгаа нэг тоог сонгоорой!')

    }
    return (
        <div className='Container'>
            <h1>Тоог таагаарай</h1>
            <p1>"1-100"-н хооронд байгаа тоог таагаарай</p1>
            <Space.Compact style={{ width: '50%' }}>
                <Input placeholder='Энд тоог бичнэ үү' onChange={onChanged} />
                <Button onClick={onClicked} type="primary">Таах</Button>
            </Space.Compact>
            <p id="myid"> </p>
            <p>{result}</p>
            <p>Та {aldsan} удаа алдсан байна</p>
            <p> Таны таамагласан тоонууд:</p>
            {aldsantoonuud.map(too=> <p>{too}</p>)}
        </div>
    );
}
export default Guessthenumber;            
//                                            .........  
//                                        <\\ | NOTES | //>                                             2023.08.16
//                                            ''''''''' 
//10  useState-iig [] bolgsn                  
//24:29 aldsantoonuud functs dotorhiig([...aldsantoonuud,text ]) gej uurchilsun
//50 "<p>" - tei holbson 