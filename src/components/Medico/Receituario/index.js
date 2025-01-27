import React from 'react';
import { Form, Input } from 'antd';
const { TextArea } = Input;

function Receituario(props) {
    return (
        <div
            id="receita"
            style={{
                width: 418, //largura para o formato de A5
                height: 595,
                maxHeight: 595,
                height: 'auto',
                marginTop: 0,
                fontSize: 12,
                // border: 1,
                // borderColor: 'black',
                borderStyle: 'solid',
            }}
        >
            <div
                style={{
                    marginLeft: 10,
                    marginTop: 5,
                    display: 'flex',
                    flexDirection: 'row',
                    marginBottom: 10,
                    alignItems: 'center',
                }}
            >
                <img
                    src={props.fundoLogo}
                    alt="Ultra Cárdio"
                    style={{
                        width: 100,
                        height: 100,
                        marginTop: 5,
                        borderRadius: 5,
                    }}
                />
                <span
                    style={{
                        marginTop: -10,
                        marginLeft: 10,
                        display: 'flex',
                        flexDirection: 'column',
                    }}
                >
                    <span> ULTRA CÁRDIO</span>
                    <span> Clínica</span>
                </span>
            </div>
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    marginLeft: 10,
                    marginBottom: 5,
                }}
            >
                <label style={{}}>Nº INSCRIÇÃO: </label>
                <label>
                    Nome: <b>{props.paciente}</b>
                </label>
            </div>
            <Form.Item name="receita">
                <TextArea
                    rows="auto"
                    style={{
                        width: 400,
                        height: 350,
                        marginLeft: 10,
                        resize: 'none',
                    }}
                    placeholder="Insira a receita"
                    wrap="off"
                />
            </Form.Item>
            <div style={{ marginLeft: 10 }}>
                <center>
                    Doctor <b>{props.userName}</b>
                    <br />
                    Nº Ordem <span>{props.numeroOrder}</span>
                </center>
            </div>
        </div>
    );
}

export default Receituario;
