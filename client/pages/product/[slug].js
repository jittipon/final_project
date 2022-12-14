import styles from '../../styles/Home.module.scss'
import CartItem from '../../components/CartItem'
import { ArrowLeftOutlined } from '@ant-design/icons';
import { BsPersonCircle } from 'react-icons/bs';
import { AiOutlineFieldTime } from 'react-icons/ai';
import { Select } from 'antd';
import { InfoCircleOutlined, HeartOutlined, ShoppingCartOutlined } from '@ant-design/icons';
import { Input, Tooltip } from 'antd';
import { useRouter } from 'next/router'
import { Image } from 'antd';
import { Button } from 'antd';
import toast from 'react-hot-toast';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Loader from '../../components/Loader';

export default function ProductScreen(props) {
    const { query } = useRouter()
    const { slug } = query

    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState(null);


    console.log(slug);

    const toastSuccess = (props) => {
        if (user == null) {
            toast.error('Please login to add to cart');
            window.location.href = '/login';
        } else {

            axios.post(`http://localhost:5000/api/cart/addItem/Test`, {
                itemID: props,
                amount: 1
            }).then((res) => {
                console.log(res);
                console.log(res.data);
            })

            toast.success('ADD TO CART SUCCESS ',
                {
                    // icon: '😝',
                    style: {
                        borderRadius: '10px',
                        padding: "1rem",
                        fontWeight: "bold",
                        // fontSize: "1.5rem"
                    },
                });
            console.log("TOASTTs");
        }
    }

    const toastFavSuccess = (props) => {
        if (user == null) {
            toast.error('Please login to add to favorite');
            window.location.href = '/login';
        } else {

            axios.post(`http://localhost:5000/api/FavoriteItem/Test`, {
                itemID: props
            }).then((res) => {
                console.log(res);
                console.log(res.data);
            })

            toast.success('ADD TO CART SUCCESS ',
                {
                    icon: '❤️',
                    style: {
                        borderRadius: '10px',
                        padding: "1rem",
                        fontWeight: "bold",
                        // fontSize: "1.5rem"
                    },
                });
        }
    }

    const fetchData = async () => {
        const response = await axios.get(`http://localhost:5000/api/Items/${slug}`).then
            ((res) => {
                console.log('res' + JSON.stringify(res.data));
                console.log('res.data' + res.data);
                setData(res.data);
                setLoading(false);
            })
    }


    useEffect(() => {

        if (slug != undefined) {
            fetchData();
            setUser(JSON.parse(window.localStorage.getItem("user")));
            console.log(user);
        }
        console.log('data = = = = = ' + data);

    }, [slug])

    if (loading) {
        //loading on slow internet
        return <>
            <main className={styles.main}>
                <div className={styles.spinner}><Loader /></div>
            </main>
        </>
    }

    return (
        <div className={styles.main}>
            <div className={styles.product}>

                <h1 className={styles.titleProduct}>{data.name}</h1>
                {/* <h1>{slug}</h1> */}
                <Image
                    width={500}
                    src={data.imagePath}
                />

                <h1 className={styles.descriptionProductTitle}>Description</h1>

                <h1 className={styles.descriptionProduct}>{data.description}</h1>


                <h1 className={styles.descriptionProductTitle}>Price {data.price} $</h1>

                <Tooltip title="Favorite">
                    <Button danger shape="circle" icon={<HeartOutlined />}
                        style={{ marginTop: "3rem", backgroundColor: 'pink' }}
                        size={'large'}
                        onClick={() => toastFavSuccess(data._id)}
                    />
                </Tooltip>

                <Button type='primary' onClick={() => toastSuccess(data._id)} icon={<ShoppingCartOutlined />} size={'large'} style={{ marginLeft: "2rem" }}>
                    add to cart
                </Button>

            </div>
        </div>


    )


}