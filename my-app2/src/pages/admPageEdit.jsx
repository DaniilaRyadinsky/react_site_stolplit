import React, { useState, useEffect } from 'react'
import Container from '../components/container/Container'
import styles from './admPage.module.css'
import { useNavigate } from 'react-router-dom'
import { useParams } from 'react-router-dom'


import InputEdit from '../components/InputEdit/InputEdit'


const AdmPageEdit = () => {
    const [save, setSave] = useState(false)

    const[name, setName] = useState('')
    const[price, setPrice] = useState('')
    const[width, setWidth] = useState('')
    const[height, setHeight] = useState('')
    const[depth, setDepth] = useState('')
    const[img_link, setImg_link] = useState('')
    const[deliveryTime, setDeliveryTime] = useState('')
    const[handPrice, setHandPrice] = useState('')
    const[elevatorPrice, setElevatorPrice] = useState('')
    const[assemblyPrice, setAssemblyPrice] = useState('')

    const params = useParams()
    const index = params.id
    const navigate = useNavigate();



    useEffect(() => {
        fetch(`http://localhost:5088/api/Services/${index}`)
            .then(res => res.json()).then((r) => {
                setDeliveryTime(r.deliveryTime);
                setAssemblyPrice(r.assemblyPrice);
                setElevatorPrice(r.elevatorPrice);
                setHandPrice(r.handPrice)
            })
            .then(() => {
                fetch(`http://localhost:5088/api/Items/${index}`)
                .then(res2 => (res2.json()).then((r)=> {
                    setName(r.nameItem);
                    setPrice(r.price);
                    setWidth(r.width);
                    setHeight(r.height);
                    setDepth(r.depth);
                    setImg_link(r.img_link)}))
            })
            // setName(item.nameItem)
            // console.log(name)
    }, [])


    const Put = async (e, link, struct) => {
        try {
            const response = await fetch(`${link + struct.id}`, {
               method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(struct)
            });

            if (!response.ok) throw new Error('Ошибка изменения товара');
        } catch (error) {
            console.error(error);
            alert('Ошибка изменения товара');
        }
    };

    const PutBtn = (e) => {
        var structItem = {
            "id":index,
            "nameItem": name,
            "price": Number(price),
            "width": Number(width),
            "height": Number(height),
            "depth": Number(depth),
            "img_link": img_link
        }
        console.log(structItem)
        Put(e, 'http://localhost:5088/api/Items/', structItem)
        var structService = {
            "id":index,
            "deliveryTime": deliveryTime,
            "elevatorPrice": Number(elevatorPrice),
            "handPrice": Number(handPrice),
            "assemblyPrice": Number(assemblyPrice),
        }
        console.log(structService)
        Put(e, 'http://localhost:5088/api/Services/', structService)
        navigate(`/admin`)
    }




    function handleChange(event) {
        if(event.target.id === "nameItem")
            setName(event.target.value)
        else if ( event.target.id === "price")
            setPrice(event.target.value)
        else if ( event.target.id === "width")
            setWidth(event.target.value)
        else if ( event.target.id === "height")
            setHeight(event.target.value)
        else if ( event.target.id === "depth")
            setDepth(event.target.value)
        else if ( event.target.id === "img_link")
            setImg_link(event.target.value)
        else if ( event.target.id === "deliveryTime")
            setDeliveryTime(event.target.value)
        else if ( event.target.id === "elevatorPrice")
            setElevatorPrice(event.target.value)
        else if ( event.target.id === "handPrice")
            setHandPrice(event.target.value)
        else if ( event.target.id === "assemblyPrice")
            setAssemblyPrice(event.target.value)
     }

    return (
        <Container>
            <div className={styles.container}>
                <div>
                    <h2>Изменить товар</h2>
                    <form className={styles.addTovar}>
                        <p className={styles.input}>Артикул {index}</p>
                        <input type='text' className={styles.input} placeholder='Имя товара' value={name} id="nameItem" onChange={handleChange} />
                        <input type='text' className={styles.input} placeholder='Цена товара' value={price} id='price' onChange={handleChange} />
                        <input type='text' className={styles.input} placeholder='Ширина' value={width} id='width' onChange={handleChange} />
                        <input type='text' className={styles.input} placeholder='Высота' value={height} id='height' onChange={handleChange} />
                        <input type='text' className={styles.input} placeholder='Глубина' value={depth} id='depth' onChange={handleChange} />
                        <input type='text' className={styles.input} placeholder='Доставка' value={deliveryTime} id='deliveryTime' onChange={handleChange} />
                        <input type='text' className={styles.input} placeholder='Стоимость доставки' value={elevatorPrice} id='elevatorPrice' onChange={handleChange} />
                        <input type='text' className={styles.input} placeholder='Стоимость подьема' value={handPrice} id='handPrice' onChange={handleChange} />
                        <input type='text' className={styles.input} placeholder='Стоимость сборки' value={assemblyPrice} id='assemblyPrice' onChange={handleChange} />
                        <input type='text' className={styles.input} placeholder='Ссылка на изображение' value={img_link} id='img_link' onChange={handleChange} />

                         <button type="button" className={styles.button} onClick={PutBtn}>Сoхранить</button>
                        {save === true && <p>Сохранено</p>}
                    </form>
                </div>
                
            </div>
        </Container>
    )
}

export default AdmPageEdit