import React from 'react'
import styled, {css} from 'styled-components';
import  {useState, useEffect} from 'react';



import {db} from './Base';
import Icon from '../img/wa.jpg';
import Icon2 from '../img/fb.jpg';
import Icon3 from '../img/gt.jpg';
import Icon4 from '../img/linkedin.jpg';
import {collection, addDoc, getDocs, doc, Timestamp } from 'firebase/firestore';
import Logo from '../img/logo.png';



const Database = () => {
  const [Names, setNames] = useState([]);
  const [Desc, setDesc] = useState('');
  const [Githup, setGithup] = useState('');
  const [Linkedin, setLinkedin] = useState('');
  const [Facebook, setFacebook] = useState('');
  const [Whatsapp, setWhatsapp] = useState('');
  const [Avater, setAvater] = useState('');

  const collectionRef = collection(db, 'Colleagues');




  const CardId = async () => {
    await addDoc(collectionRef, {name:Names, desc:Desc, github:Githup, linkedin:Linkedin,
    facebook:Facebook, whatapp:Whatsapp, photo:Avater})
    console.log(CardId)
  }


  const getData = async () => {
    const data = await getDocs(collectionRef);
    setNames(data.docs.map((doc) => ({...doc.data(), id:doc.id})));
  }

useEffect(() => {
    getData()
    
  }, []);
  
  return (
    <Container> 

      <Header>
        <img src={Logo}/>
      </Header>
      <Hero>
        <br/><br/><br/>
      <Text>welcome to our page</Text>
      <Text>Meet with the LSETF/USADF Developers from Nigeria</Text>
      <Text>just state your specification and it is DONE</Text>
      </Hero>     
      <CardsHolder>
      <Text>SOFTWARE ENGINEERING 6TH COHORT</Text>
        {Names.map((datas) => (
        <div key={datas.id}>
          <Card>
          <img style={{width:'250px', height:'200px', marginLeft:'-1px'}} src= {datas.photo} />
          <CardTitle>{datas.name}</CardTitle>
          <CardDesc>{datas.desc}</CardDesc><br/>
          <CardIcon>
          <CardDesc><a target='_blank' href={`${datas.github}`}><ImgIcon3></ImgIcon3></a></CardDesc>
          <CardDesc><a target='_blank' href={`${datas.linkedin}`}><ImgIcon4></ImgIcon4></a></CardDesc>
          <CardDesc><a target='_blank' href={`${datas.facebook}`}><ImgIcon2></ImgIcon2></a></CardDesc>
          <CardDesc><a target='_blank' href={`${datas.whatapp}`}><ImgIcon></ImgIcon></a></CardDesc>
          
          </CardIcon>
          </Card>
          
        </div>
      ))}
      </CardsHolder>
    </Container>
  )
}

export default Database

const Container = styled.div`
    
`
const Text = styled.h1`
    color: white;
`


const Top = styled.div`
  height: 70px;
  width: 100%;
  background-color:blue ;
  margin-top: 0;
`


const Header = styled.div`
  height: 150px;
  width: 100%;
  background-color:white ;
`
const Hero = styled.div`
height: 350px;
background-color: #1F4088;
text-align: center;
    
`

const CardsHolder = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`
const Card = styled.div`
    margin: 2rem 2rem 2rem 0;
    padding: 1.5rem;
    width: 250px;
    box-shadow: 0 0 24px 2px rgba(0,0,0,0.1);
    transform: translate(0%);
    border-radius: 20px;
    transition: 0.3s ease-out;
    cursor: pointer;

  `
const CardTitle = styled.div`
    font-weight: 800;
    font-size: 1.5rem;
`
const CardDesc = styled.div`
    font-size: 12px;
    font-style: italic;       
`
const  CardIcon  = styled.div`
    display: flex;
    justify-content: space-around;
      
`
const ImgIcon = styled.img`
  width: 30px;
  height:30px;
  border-radius: 100%;
  background-image: url(${Icon});  
  background-size: cover;  
 
`
const ImgIcon2 = styled.img`
  width: 30px;
  height:30px;
  border-radius: 50%;  
  background-image: url(${Icon2});
  background-size: cover;
  `
  const ImgIcon3 = styled.img`
  width: 30px;
  height:30px;
  border-radius: 50%;   
  background-image: url(${Icon3});
  background-size: cover;
  `
  const ImgIcon4 = styled.img`
  width: 30px;
  height:30px;
  border-radius: 50%;   
  background-image: url(${Icon4});  
  background-size: cover;
  `
  const img = styled.img`
    
  `