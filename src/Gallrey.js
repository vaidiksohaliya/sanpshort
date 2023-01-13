import React, { useState } from 'react';
import { Container, Row, Col } from "react-bootstrap"
import Menu from "./Menu"


function Gallrey() {
    const [item, setitem] = useState(Menu);
    const [name,setname] =useState();

    const filteritem = (categitem) =>{
        const updateditems = Menu.filter((curelem) =>{
            return curelem.category === categitem;
        });

        setitem(updateditems);
    }

    function search(i){
        const updateditems = Menu.filter((curelem) =>{
            return curelem.category === i;
        });
        setitem(updateditems);
        setname(i)

    }

    return (
        <Container className='container'>
            <Row>
                <Col className=''>
                    <div>
                        <h1 className='mt-5 text-center'>SnapShot</h1>
                        <hr />
                    </div>
                </Col>
            </Row>
            <Row>
                <Col className='text-center'>
                    <div>
                        <input type="text" className='' placeholder='search' onChange={(i) => search(i.target.value)} />
                    </div>
                </Col>
            </Row>
            <div className="img-container">
                <Row>
                    <Col>
                        <div className='container'>
                            <div className='d-flex justify-content-around mt-5'>
                                <button className='btn1' onClick={()=> filteritem('mountain')}>Mountain</button>
                                <button className='btn1' onClick={()=> filteritem('beaches')}>Beaches</button>
                                <button className='btn1' onClick={()=> filteritem('birds')}>Birds</button>
                                <button className='btn1' onClick={()=> filteritem('food')}>Food</button>
                            </div>
                        </div>
                    </Col>
                </Row>
            </div>
            <div className='img-container'>
                <Row className='my-5'>
                    {
                        item.map((elem) => {
                            const { id, image } = elem;
                            return (
                                <>
                                    <Col className='col-3'>
                                        <div className='mt-4  hover_effect effect1'>
                                            <img src={image} alt="" srcset=""  className='img-fluid'/>
                                        </div>
                                    </Col>
                                </>
                            )
                        })
                    }


                </Row>
            </div>


        </Container>
    );
}

export default Gallrey;