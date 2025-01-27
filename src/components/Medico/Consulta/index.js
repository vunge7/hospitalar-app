import React, { useEffect, useState } from 'react';
import { api } from '../../../service/api';
import jsPDF from 'jspdf';
import fundoLogo from '../../../assets/images/logo5.jpg';
import Receituario from '../Receituario';

import {
    List,
    Flex,
    Button,
    Avatar,
    Modal,
    Tabs,
    Input,
    Form,
    message,
} from 'antd';
import { format } from 'date-fns';
const { TextArea } = Input;

function Consulta() {
    const [id, setId] = useState(0);
    const [data, setData] = useState([]);
    const [nomePaciente, setNomePaciente] = useState('');
    const [exameFisico, setExameFisico] = useState('');
    const [motivoConsulta, setMotivoConsulta] = useState('');
    const [historiaClinica, setHistoriaClinica] = useState('');
    const [receita, setReceita] = useState('');
    const [idInscricao, setIdInscricao] = useState(0);
    const [isModalConsulta, setIsModalConsulta] = useState(false);
    const [isConsultaCriada, setIsConsultaCriada] = useState(false);
    const [loading, setLoading] = useState(false);
    const [formConsulta] = Form.useForm();

    const [messageApi, contextHolder] = message.useMessage();

    useEffect(() => {
        _carrgarDados();
    }, []);

    useEffect(() => {
        formConsulta.setFieldsValue({
            motivoConsulta: motivoConsulta,
            historiaClinica: historiaClinica,
            exameFisico: exameFisico,
            receita: receita,
        });
    }, [motivoConsulta, historiaClinica, exameFisico, receita]);

    const _showModal = async (id, nome) => {
        setNomePaciente(nome);

        await api
            .get('/consulta/' + id + '/ABERTO')
            .then((r) => {
                setIsConsultaCriada(true);
                updateFieldsInForm(r.data);
            })
            .catch((e) => {
                limpar();
            });

        setIdInscricao(id);
        setIsModalConsulta(true);
    };

    const handleCancel = () => {
        setIsModalConsulta(false);
    };

    const handleOk = async () => {};

    const _onChange = (key) => {
        //  console.log(key);
    };

    const success = (msg) => {
        messageApi.open({
            type: 'success',
            content: msg,
        });
    };
    const error = (msg) => {
        messageApi.open({
            type: 'error',
            content: msg,
        });
    };

    const limpar = () => {
        setIsConsultaCriada(false);
        setMotivoConsulta('');
        setHistoriaClinica('');
        setExameFisico('');
        setReceita('');
        setId(0);
    };

    const _carrgarDados = async () => {
        await api
            .get('inscricao/all/consulta')
            .then((r) => {
                let data = r.data.map((item, index) => {
                    Object.defineProperty(item, 'tempo', {
                        value: item.dataCriacao,
                        writable: true,
                        enumerable: true,
                        configurable: true,
                    });
                    return item;
                });
                setData(data);
            })
            .catch((e) => {
                console.log('Falha na busca', e);
            });
    };

    const consultaCreate = (values) => {
        console.log(values.receita);
        let consulta = {
            motivoConsulta: values.motivoConsulta,
            historiaClinica: values.historiaClinica,
            exameFisico: values.exameFisico,
            dataConsulta: format(new Date(), 'yyyy-MM-dd HH:mm:ss'),
            estadoConsulta: 'ABERTO',
            receita: values.receita,
            inscricao: {
                id: idInscricao,
            },
            usuario: {
                id: 1,
            },
        };
        return consulta;
    };
    const _onFinishCriar = async (values) => {
        setLoading(true);
        let consulta = consultaCreate(values);
        await api
            .post('consulta/add', consulta)
            .then((r) => {
                let msg = 'consulta criada com successo';
                console.log(msg);
                success(msg);
                setLoading(false);
                setIsConsultaCriada(true);
            })
            .catch((e) => {
                let msg = 'Falha ao criar a consulta';
                console.error(msg, e);
                error(msg);
                setLoading(false);
            });
    };

    const _onFinishActualizar = async (values) => {
        setLoading(true);
        let consulta = consultaCreate(values);
        Object.defineProperty(consulta, 'id', {
            value: id,
            writable: true,
            enumerable: true,
            configurable: true,
        });
        console.log(consulta);

        await api
            .put('consulta/edit', consulta)
            .then((r) => {
                let msg = 'consulta actualizada com successo';
                console.log(msg);
                success(msg);
                setLoading(false);
            })
            .catch((e) => {
                let msg = 'Falha ao actualizar a consulta';
                console.error(msg, e);
                error(msg);
                setLoading(false);
            });
    };

    const updateFieldsInForm = (data) => {
        setMotivoConsulta(data.motivoConsulta);
        setHistoriaClinica(data.historiaClinica);
        setExameFisico(data.exameFisico);
        setReceita(data.receita);
        setId(data.id);
    };

    const _itemsTabs = [
        {
            key: '1',
            label: 'Motivo da consulta',
            children: (
                <>
                    <Form.Item
                        name="motivoConsulta"
                        rules={[
                            {
                                required: true,
                                message:
                                    'Por favor digite o motivo da consulta',
                            },
                        ]}
                    >
                        <TextArea
                            rows={14}
                            placeholder="Digite o motivo da consulta"
                        />
                    </Form.Item>
                </>
            ),
        },
        {
            key: '2',
            label: 'História Clínica',
            children: (
                <>
                    <Form.Item name="historiaClinica">
                        <TextArea
                            rows={14}
                            placeholder="Digite a história clínica "
                        />
                    </Form.Item>
                </>
            ),
        },
        {
            key: '3',
            label: 'Exame Físico',
            children: (
                <>
                    <Form.Item name="exameFisico">
                        <TextArea
                            id="exameFisico"
                            rows={14}
                            placeholder="Insira o detalhe do exame físico"
                        />
                    </Form.Item>
                </>
            ),
        },
        {
            key: '4',
            label: 'Exames Complementares',
            children: '',
        },
        {
            key: '5',
            label: 'Diagnósticos',
            children: '',
        },
        {
            key: '6',
            label: 'Receituário',
            children: (
                <Receituario
                    fundoLogo={fundoLogo}
                    paciente={nomePaciente}
                    userName="Domingos Dala Vunge"
                    numeroOrder="7170"
                />
            ),
        },
    ];

    function convertToPdf() {
        var doc = new jsPDF('element', 'pt', 'a5');
        doc.html(document.querySelector('#receita'), {
            callback: function (pdf) {
                pdf.save('receita' + idInscricao + '.pdf');
            },
        });
    }

    return (
        <>
            {contextHolder}
            <Flex gap="small" vertical style={{ width: 600 }}>
                <List
                    header={<div>Lista de paciente por consultar</div>}
                    footer={<div>x</div>}
                    itemLayout="horizontal"
                    dataSource={data}
                    renderItem={(item, index) => (
                        <List.Item>
                            <List.Item.Meta
                                avatar={
                                    <Avatar
                                        src={`https://api.dicebear.com/7.x/miniavs/svg?seed=${index}`}
                                    />
                                }
                                title={item.inscricaoId + ' - ' + item.nome}
                                description="Dados da Última Consulta"
                            />
                            <Flex horizontal="true">
                                <Button
                                    size="small"
                                    type="primary"
                                    onClick={(e) =>
                                        _showModal(item.inscricaoId, item.nome)
                                    }
                                    style={{
                                        marginRight: 20,
                                        padding: 10,
                                        height: 35,
                                        borderRadius: 30,
                                    }}
                                >
                                    Consultar
                                </Button>
                                <Button
                                    size="small"
                                    type="link"
                                    style={{
                                        marginRight: 20,
                                        padding: 10,
                                        height: 35,
                                        borderRadius: 30,
                                    }}
                                >
                                    Finalizar
                                </Button>
                            </Flex>
                        </List.Item>
                    )}
                ></List>
            </Flex>

            <Modal
                title={'Consulta do doente: '}
                open={isModalConsulta}
                onCancel={handleCancel}
                width={800}
            >
                <Form
                    form={formConsulta}
                    onFinish={
                        isConsultaCriada ? _onFinishActualizar : _onFinishCriar
                    }
                >
                    <div>
                        <span>{nomePaciente}</span>
                        <div>Dados da Triagem</div>
                        <Button onClick={() => convertToPdf()}>
                            Visualizar Receita
                        </Button>
                    </div>
                    <Form.Item>
                        {isConsultaCriada ? (
                            <Button block type="primary" htmlType="submit">
                                Actualizar
                            </Button>
                        ) : (
                            <Button
                                block
                                type="primary"
                                loading={loading}
                                htmlType="submit"
                            >
                                Criar
                            </Button>
                        )}
                    </Form.Item>

                    <Tabs
                        defaultActiveKey="1"
                        items={_itemsTabs}
                        onChange={_onChange}
                        tabPosition="right"
                        style={{ marginTop: 20 }}
                    />
                </Form>
            </Modal>
        </>
    );
}

export default Consulta;
