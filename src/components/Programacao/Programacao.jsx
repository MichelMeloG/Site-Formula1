import React from 'react';
import { Container } from './Styles';
import Card from '../Card-prog/Card';

function Programacao() {
    return (
<>
    <Container>
        <div className='espaco'></div>
        <div className="container" id="Programacao">
            <section>
                <h2>Programação</h2>
                <Card />
            </section>
        </div>
    </Container>
</>
    );
}

export default Programacao;
