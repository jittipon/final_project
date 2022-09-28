import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.scss'
// import Card from '../components/Card'
import shirt2 from '../assets/shirt2.jpg'
import { EditOutlined, EllipsisOutlined, SettingOutlined, ShoppingCartOutlined, HeartOutlined, HeartFilled } from '@ant-design/icons';
import { Avatar, Card } from 'antd';
import heroImage from '../assets/hero_image.webp'
import toast from 'react-hot-toast';
import ScrollButton from '../components/ScrollButton';
import { BackTop } from 'antd';
import { ArrowUpOutlined } from '@ant-design/icons';

const { Meta } = Card;

export default function Home() {

  const toastSuccess = () => {
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

  return (
    <div className={styles.container}>
      <Head>
        <title>KU E-SHOP</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <style>
          @import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');
        </style>
      </Head>


      <main className={styles.main}>
        <div className={styles.firstColumn}>

          <div className={styles.column}>
            <h1 className={styles.title}>
              Fast Shipping on Orders $99+
            </h1>

            <h1 className={styles.secondTitle}>
              Within the United States Only
            </h1>
          </div>

          <div className={styles.blackLine} />

          <div className={styles.column}>

            <h1 className={styles.title}>
              Quick Pickup
            </h1>
            <h1 className={styles.secondTitle}>
              Buy Online, Pickup In store
            </h1>
          </div>
          <div className={styles.blackLine} />

          <div className={styles.column}>


            <h1 className={styles.title}>
              Worldwide Shipping
            </h1>
            <h1 className={styles.secondTitle}>
              Easy Ship with Glopal
            </h1>
          </div>
        </div>


        <div className={styles.hero_section}>

          <div className={styles.hero_image}>
            <Image src={heroImage} alt="shirt" layout='responsive' />

          </div>
          <p className={styles.description}>
            WELCOME TO OUR STORE
          </p>


        </div>


        <div className={styles.grid}>
          {/* <a href="https://nextjs.org/docs" className={styles.card}>
            <h2>Documentation </h2>
            <p>Find in-depth information about Next.js features and API.</p>
          </a> */}

          <Card
            hoverable
            style={{
              width: 300,
              marginRight: "2rem",
              marginTop: "1rem"
            }}
            cover={
              <img
                alt="example"
                src="https://seekthailand.com/uploads/products/b54e058785bd1b0893fd2f1138a312bb.jpg"
                className='test'
                style={{ borderRadius: "2px 2px 0 0", width: "90%", marginLeft: "1rem", marginTop: "1rem" }}
              />
            }
            actions={[
              <>
                {
                  true ? <HeartOutlined key="edit" style={{ fontSize: '16px', color: '#E80F88', }} /> : <HeartFilled style={{ fontSize: '16px', color: '#E80F88', }} key="edit" />
                }
              </>,
              // <HeartFilled style={{ fontSize: '16px', color: '#E80F88', }} key="edit" />,
              <ShoppingCartOutlined key="setting" style={{ fontSize: '20px' }} onClick={toastSuccess} />,
              <EllipsisOutlined key="ellipsis" style={{ fontSize: '20px' }} />,
            ]}
          >
            <Meta
              title="Men Long sleeves white"
              description="699 THB"
            />
          </Card>

          <Card
            hoverable
            style={{
              width: 300,
              marginRight: "2rem",
              marginTop: "1rem"

            }}
            cover={
              <img
                alt="example"
                src="https://seekthailand.com/uploads/products/57b191e9d5f8900b48cbb8c35a747dc9.jpg"
                style={{ borderRadius: "2px 2px 0 0", width: "90%", marginLeft: "1rem", marginTop: "1rem" }}
              />
            }
            actions={[
              <>
                {
                  true ? <HeartOutlined key="edit" style={{ fontSize: '16px', color: '#E80F88', }} /> : <HeartFilled style={{ fontSize: '16px', color: '#E80F88', }} key="edit" />
                }
              </>,
              <ShoppingCartOutlined key="setting" style={{ fontSize: '20px' }} onClick={toastSuccess} />,
              <EllipsisOutlined key="ellipsis" style={{ fontSize: '20px' }} />,
            ]}
          >
            <Meta
              title="Men white sneaker"
              description="1299 THB"
            />
          </Card>

          <Card
            hoverable
            style={{
              width: 300,
              marginRight: "2rem",
              marginTop: "1rem"

            }}
            cover={
              <img
                alt="example"
                src="https://seekthailand.com/uploads/products/cf2f387137a7b5dbcaf85bc4f80c66d7.jpg"
                style={{ borderRadius: "2px 2px 0 0", width: "90%", marginLeft: "1rem", marginTop: "1rem" }}
              />
            }
            actions={[
              <>
                {
                  false ? <HeartOutlined key="edit" style={{ fontSize: '16px', color: '#E80F88', }} /> : <HeartFilled style={{ fontSize: '16px', color: '#E80F88', }} key="edit" />
                }
              </>,
              <ShoppingCartOutlined key="setting" style={{ fontSize: '20px' }} onClick={toastSuccess} />,
              <EllipsisOutlined key="ellipsis" style={{ fontSize: '20px' }} />,
            ]}
          >
            <Meta
              title="Men white sneaker"
              description="1299 THB"
            />
          </Card>

          <Card
            hoverable
            style={{
              width: 300,
              marginRight: "2rem",
              marginTop: "1rem"

            }}
            cover={
              <img
                alt="example"
                src="https://seekthailand.com/uploads/products/c2d928be82e2c28c936b6674168cf051.jpg"
                style={{ borderRadius: "2px 2px 0 0", width: "90%", marginLeft: "1rem", marginTop: "1rem" }}
              />
            }
            actions={[
              <>
                {
                  true ? <HeartOutlined key="edit" style={{ fontSize: '16px', color: '#E80F88', }} /> : <HeartFilled style={{ fontSize: '16px', color: '#E80F88', }} key="edit" />
                }
              </>,
              <ShoppingCartOutlined key="setting" style={{ fontSize: '20px' }} onClick={toastSuccess} />,
              <EllipsisOutlined key="ellipsis" style={{ fontSize: '20px' }} />,
            ]}
          >
            <Meta
              title="Men white sneaker"
              description="1299 THB"
            />
          </Card>
          <Card
            hoverable
            style={{
              width: 300,
              marginRight: "2rem",
              marginTop: "1rem"
            }}
            cover={
              <img
                alt="example"
                src="https://seekthailand.com/uploads/products/b54e058785bd1b0893fd2f1138a312bb.jpg"
                className='test'
                style={{ borderRadius: "2px 2px 0 0", width: "90%", marginLeft: "1rem", marginTop: "1rem" }}
              />
            }
            actions={[
              <>
                {
                  true ? <HeartOutlined key="edit" style={{ fontSize: '16px', color: '#E80F88', }} /> : <HeartFilled style={{ fontSize: '16px', color: '#E80F88', }} key="edit" />
                }
              </>,
              <ShoppingCartOutlined key="setting" style={{ fontSize: '20px' }} onClick={toastSuccess} />,
              <EllipsisOutlined key="ellipsis" style={{ fontSize: '20px' }} />,
            ]}
          >
            <Meta
              title="Men Long sleeves white"
              description="699 THB"
            />
          </Card>

          <Card
            hoverable
            style={{
              width: 300,
              marginRight: "2rem",
              marginTop: "1rem"

            }}
            cover={
              <img
                alt="example"
                src="https://seekthailand.com/uploads/products/57b191e9d5f8900b48cbb8c35a747dc9.jpg"
                style={{ borderRadius: "2px 2px 0 0", width: "90%", marginLeft: "1rem", marginTop: "1rem" }}
              />
            }
            actions={[
              <>
                {
                  true ? <HeartOutlined key="edit" style={{ fontSize: '16px', color: '#E80F88', }} /> : <HeartFilled style={{ fontSize: '16px', color: '#E80F88', }} key="edit" />
                }
              </>,
              <ShoppingCartOutlined key="setting" style={{ fontSize: '20px' }} onClick={toastSuccess} />,
              <EllipsisOutlined key="ellipsis" style={{ fontSize: '20px' }} />,
            ]}
          >
            <Meta
              title="Men white sneaker"
              description="1299 THB"
            />
          </Card>

          <Card
            hoverable
            style={{
              width: 300,
              marginRight: "2rem",
              marginTop: "1rem"

            }}
            cover={
              <img
                alt="example"
                src="https://seekthailand.com/uploads/products/cf2f387137a7b5dbcaf85bc4f80c66d7.jpg"
                style={{ borderRadius: "2px 2px 0 0", width: "90%", marginLeft: "1rem", marginTop: "1rem" }}
              />
            }
            actions={[
              <>
                {
                  true ? <HeartOutlined key="edit" style={{ fontSize: '16px', color: '#E80F88', }} /> : <HeartFilled style={{ fontSize: '16px', color: '#E80F88', }} key="edit" />
                }
              </>,
              <ShoppingCartOutlined key="setting" style={{ fontSize: '20px' }} onClick={toastSuccess} />,
              <EllipsisOutlined key="ellipsis" style={{ fontSize: '20px' }} />,
            ]}
          >
            <Meta
              title="Men white sneaker"
              description="1299 THB"
            />
          </Card>

          <Card
            hoverable
            style={{
              width: 300,
              marginRight: "2rem",
              marginTop: "1rem"

            }}
            cover={
              <img
                alt="example"
                src="https://seekthailand.com/uploads/products/c2d928be82e2c28c936b6674168cf051.jpg"
                style={{ borderRadius: "2px 2px 0 0", width: "90%", marginLeft: "1rem", marginTop: "1rem" }}
              />
            }
            actions={[
              <>
                {
                  true ? <HeartOutlined key="edit" style={{ fontSize: '16px', color: '#E80F88', }} /> : <HeartFilled style={{ fontSize: '16px', color: '#E80F88', }} key="edit" />
                }
              </>,
              <ShoppingCartOutlined key="setting" style={{ fontSize: '20px' }} onClick={toastSuccess} />,
              <EllipsisOutlined key="ellipsis" style={{ fontSize: '20px' }} />,
            ]}
          >
            <Meta
              title="Men white sneaker"
              description="1299 THB"
            />
          </Card>
          <Card
            hoverable
            style={{
              width: 300,
              marginRight: "2rem",
              marginTop: "1rem"
            }}
            cover={
              <img
                alt="example"
                src="https://seekthailand.com/uploads/products/b54e058785bd1b0893fd2f1138a312bb.jpg"
                className='test'
                style={{ borderRadius: "2px 2px 0 0", width: "90%", marginLeft: "1rem", marginTop: "1rem" }}
              />
            }
            actions={[
              <>
                {
                  true ? <HeartOutlined key="edit" style={{ fontSize: '16px', color: '#E80F88', }} /> : <HeartFilled style={{ fontSize: '16px', color: '#E80F88', }} key="edit" />
                }
              </>,
              <ShoppingCartOutlined key="setting" style={{ fontSize: '20px' }} onClick={toastSuccess} />,
              <EllipsisOutlined key="ellipsis" style={{ fontSize: '20px' }} />,
            ]}
          >
            <Meta
              title="Men Long sleeves white"
              description="699 THB"
            />
          </Card>

          <Card
            hoverable
            style={{
              width: 300,
              marginRight: "2rem",
              marginTop: "1rem"

            }}
            cover={
              <img
                alt="example"
                src="https://seekthailand.com/uploads/products/57b191e9d5f8900b48cbb8c35a747dc9.jpg"
                style={{ borderRadius: "2px 2px 0 0", width: "90%", marginLeft: "1rem", marginTop: "1rem" }}
              />
            }
            actions={[
              <>
                {
                  true ? <HeartOutlined key="edit" style={{ fontSize: '16px', color: '#E80F88', }} /> : <HeartFilled style={{ fontSize: '16px', color: '#E80F88', }} key="edit" />
                }
              </>,
              <ShoppingCartOutlined key="setting" style={{ fontSize: '20px' }} onClick={toastSuccess} />,
              <EllipsisOutlined key="ellipsis" style={{ fontSize: '20px' }} />,
            ]}
          >
            <Meta
              title="Men white sneaker"
              description="1299 THB"
            />
          </Card>

          <Card
            hoverable
            style={{
              width: 300,
              marginRight: "2rem",
              marginTop: "1rem"

            }}
            cover={
              <img
                alt="example"
                src="https://seekthailand.com/uploads/products/cf2f387137a7b5dbcaf85bc4f80c66d7.jpg"
                style={{ borderRadius: "2px 2px 0 0", width: "90%", marginLeft: "1rem", marginTop: "1rem" }}
              />
            }
            actions={[
              <>
                {
                  true ? <HeartOutlined key="edit" style={{ fontSize: '16px', color: '#E80F88', }} /> : <HeartFilled style={{ fontSize: '16px', color: '#E80F88', }} key="edit" />
                }
              </>,
              <ShoppingCartOutlined key="setting" style={{ fontSize: '20px' }} onClick={toastSuccess} />,
              <EllipsisOutlined key="ellipsis" style={{ fontSize: '20px' }} />,
            ]}
          >
            <Meta
              title="Men white sneaker"
              description="1299 THB"
            />
          </Card>

          <Card
            hoverable
            style={{
              width: 300,
              marginRight: "2rem",
              marginTop: "1rem"

            }}
            cover={
              <img
                alt="example"
                src="https://seekthailand.com/uploads/products/c2d928be82e2c28c936b6674168cf051.jpg"
                style={{ borderRadius: "2px 2px 0 0", width: "90%", marginLeft: "1rem", marginTop: "1rem" }}
              />
            }
            actions={[
              <>
                {
                  true ? <HeartOutlined key="edit" style={{ fontSize: '16px', color: '#E80F88', }} /> : <HeartFilled style={{ fontSize: '16px', color: '#E80F88', }} key="edit" />
                }
              </>,
              <ShoppingCartOutlined key="setting" style={{ fontSize: '20px' }} onClick={toastSuccess} />,
              <EllipsisOutlined key="ellipsis" style={{ fontSize: '20px' }} />,
            ]}
          >
            <Meta
              title="Men white sneaker"
              description="1299 THB"
            />
          </Card>

          {/* <Card title={"KU T-Shirt"} description={"KU T-Shirt"} image={"../assets/shirt2.jpg"} link={"https://www.ku.ac.th/th"}/> */}
          {/* <Image src={shirt2} alt="KU T-Shirt" width={500} height={500} /> */}
        </div>

      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          SHOPPING PROJECT BY Jittipon Kumurai and Chanwit Jampa
        </a>
      </footer>
      {/* <ScrollButton /> */}
      <BackTop >
        <ArrowUpOutlined
          style={{
            display: 'flex',
            color: "white", fontSize: "1.5rem", position: "fixed", bottom: "40px", zIndex: "1", left: "95%", backgroundColor: "black", borderRadius: "10%", width: "40px", height: "40px", justifyContent: "center", alignItems: "center"
          }} />
      </BackTop>
    </div>
  )
}
