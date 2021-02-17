function scriptTXT(){
    capturar = document.getElementById('slcAtendimento').value;
    nomeCli = document.getElementById('nomeCliente').value;
    txtTel = document.getElementById('tel').value;

    if (capturar == ""){
        txtScript = "";
        document.getElementById('scriptEnd').innerHTML = txtScript;
    }
    //encerramento Chamado Técnico - Reset
    if (capturar == "ch_Tec"){
        txtScript = "Sr(a). " + nomeCli + " entra em contato informando que está com lentidão. Acessada ONU, verificado que RX, VLAN e PPPoE estão corretos. Realizado reset, reconfigurado DHCP da ONU e cliente informa que conexão foi normalizada." + 
        "&#013;&#013;" + nomeCli + " - " + txtTel;
        document.getElementById('scriptEnd').innerHTML = txtScript;

    }
    //encerramento Chamado Técnico - PPPoE
    if (capturar == "ch_Tec_PPPoE"){
        ch_ONURX = document.getElementById('ONURX').value;
        txtScript = "Sr(a). " + nomeCli +" entra em contato informando que está com lentidão. Acessada ONU, verificado que RX em -" + ch_ONURX + " dBm, VLAN e PPPoE estão corretos. Realizado desconexão de PPPoE, boot na ONU, reconfigurado DHCP da ONU e cliente informa que conexão foi normalizada." + 
        "&#013;&#013;" + nomeCli + " - " + txtTel;
        document.getElementById('scriptEnd').innerHTML = txtScript;

    }    
    //encerramento Chamado Técnico LOSS 
    if (capturar == "ch_TecFiel"){
        contrato = document.getElementById('contratoCli').value;
        cxAtend = document.getElementById('cxAtendCli').value;
        ptSplt = document.getElementById('ptSpltCli').value;
        txtScript = "Verificado que cliente está com LOSS, possível rompimento. Efetuado procedimento do cordão óptico, ONU reiniciada, problema persiste. Será encaminhado técnico." + 
        "&#013;&#013;Contrato: " + contrato +
        "&#013;Caixa Atendimento: " + cxAtend +
        "&#013;Porta do Splitter: " + ptSplt +
        "&#013;&#013;Endereço: " +
        "&#013;&#013;" + nomeCli + " - " + txtTel +
        "&#013;&#013;Agendado para: ";
        document.getElementById('scriptEnd').innerHTML = txtScript;
    }

    //encerramento Chamado Técnico - Provision
    if (capturar == "ch_Provision"){
        txtScript = "Sr(a). " + nomeCli +" entra em contato informando que está sem conexão. Acessada ONU, verificado que RX, VLAN e PPPoE estão INCORRETOS. ONU em AUTO_PROVISIONER foi realizada reconfiguração, boot, reconfigurado DHCP e cliente informa que conexão foi normalizada." + 
        "&#013;&#013;" + nomeCli + " - " + txtTel;
        document.getElementById('scriptEnd').innerHTML = txtScript;
    }
    //encerramento Chamado Técnico ch_TecTrocarONUFiel
    if (capturar == "ch_TecTrocarONUFiel"){
		contrato = document.getElementById('contratoCli').value;
        cxAtend = document.getElementById('cxAtendCli').value;
        ptSplt = document.getElementById('ptSpltCli').value;
        txtScript = "Verificado que cliente está sem conexão e com Wi-Fi intermitente. Efetuado procedimento do cordão óptico, ONU reiniciada, ONU resetada, problema persiste. Foi verificado que cliente possui ONU AN5506-02-F, modelo defeituoso. " +
		"Será encaminhado técnico para substituição da ONU por um MODELO DIFERENTE do que o cliente possui. Cliente orientado a aguardar o prazo de substituição de até 2 dias úteis." +
		"&#013;&#013;Contrato: " + contrato +
        "&#013;Caixa Atendimento: " + cxAtend +
        "&#013;Porta do Splitter: " + ptSplt +
        "&#013;&#013;Endereço: " +
        "&#013;&#013;" + nomeCli + " - " + txtTel;
        document.getElementById('scriptEnd').innerHTML = txtScript;
    }
    //encerramento chamado técnico Huawei
    if (capturar == "ch_TecHuawei"){
        txtScript = "Sr(a). " + nomeCli +" entra em contato informando que está com lentidão. Acessada ONU Huawei, verificado que RX, VLAN e PPPoE estão corretos. Realizado reaprovisionamento da ONU e cliente informa que conexão foi normalizada." + 
        "&#013;&#013;" + nomeCli + " - " + txtTel;
        document.getElementById('scriptEnd').innerHTML = txtScript;

    }
    //encerramento chamado financeiro 2 via de boleto - E-mail
    if (capturar == "chFin_2ViaBoleto"){
        dtVencBoleto = document.getElementById('dtvencBol').value.substr(0, 10).split('-').reverse().join('/');
        txtScript = "Sr(a). " + nomeCli +" solicita a segunda via do boleto com vencimento " + dtVencBoleto + ". Boleto enviado para o cliente via e-mail. Informado ao cliente sobre a possibilidade de retirada do boleto via WhatsApp. Cliente confirmou o recebimento da fatura em linha."+
        "&#013;&#013;" + nomeCli + " - " + txtTel;
        document.getElementById('scriptEnd').innerHTML = txtScript;
    }
    //encerramento chamado financeiro 2 via de boleto - SMS
    if (capturar == "chFin_2ViaBoletoSMS"){
        dtVencBoleto = document.getElementById('dtvencBol').value.substr(0, 10).split('-').reverse().join('/');
        txtScript = "Sr(a). " + nomeCli +" solicita a segunda via do boleto com vencimento " + dtVencBoleto + ". Linha digitável enviada via SMS, conforme solicitação do cliente. Confirmado o recebimento do SMS em linha. Informado ao cliente sobre a possibilidade de retirada do boleto via WhatsApp. "+
        "&#013;&#013;" + nomeCli + " - " + txtTel;
        document.getElementById('scriptEnd').innerHTML = txtScript;
    }
    //encerramento chamado financeiro informe de pagamento com sucesso
    if (capturar == "chFin_InfPag"){
        dtVencBoleto = document.getElementById('dtvencBol').value.split('-').reverse().join('/');
        dtPag = document.getElementById('dtPagBol').value.split('-').reverse().join('/');
        txtBancoPag = document.getElementById('txtBancoPag').value;      

        if (txtBancoPag != "" && dtPag != ""){
            txtScript = "Sr(a). " + nomeCli +" informa que efetuou o pagamento do boleto com vencimento " + dtVencBoleto + ", no dia " + dtPag + " através do " + txtBancoPag +". Informe de pagamento efetuado com sucesso. Cliente está ciente do prazo de até 30 minutos para normalização." +
      	    "&#013;&#013;" + nomeCli + " - " + txtTel;
            document.getElementById('scriptEnd').innerHTML = txtScript; 
        }
        else if (dtPag != ""){
            txtScript = "Sr(a). " + nomeCli +" informa que efetuou o pagamento do boleto com vencimento " + dtVencBoleto + ", no dia " + dtPag +". Informe de pagamento efetuado com sucesso" + ". Cliente está ciente do prazo de até 30 minutos para normalização." +
            "&#013;&#013;" + nomeCli + " - " + txtTel;
            document.getElementById('scriptEnd').innerHTML = txtScript; 
        }
        else {
            txtScript = "Sr(a). " + nomeCli +" informa que efetuou o pagamento do boleto com vencimento " + dtVencBoleto + ". Informe de pagamento efetuado com sucesso" + ". Cliente está ciente do prazo de até 30 minutos para normalização." +
            "&#013;&#013;" + nomeCli + " - " + txtTel;
            document.getElementById('scriptEnd').innerHTML = txtScript; 

        }
    }
    //encerramento chamado financeiro informe de pagamento não disponível
    if (capturar == "chFin_InfPagNaoDisp"){
        dtVencBoleto = document.getElementById('dtvencBol').value.split('-').reverse().join('/');
        dtPag = document.getElementById('dtPagBol').value.split('-').reverse().join('/');
        txtBancoPag = document.getElementById('txtBancoPag').value;

        if (txtBancoPag != "" && dtPag != ""){            
            txtScript = "Sr(a). " + nomeCli +" informa que efetuou o pagamento do boleto com vencimento " + dtVencBoleto + 
            ", no dia " + dtPag + " através do banco " + txtBancoPag +
            ".&#013;Não foi possível realizar o informe de pagamento, devido ao histórico de informes realizados." +
            "&#013Cliente orientado a aguardar a compensação bancária que pode ocorrer em até 2 dias úteis." +
            "&#013;&#013;" + nomeCli + " - " + txtTel;
            document.getElementById('scriptEnd').innerHTML = txtScript; 
        }
        else if (dtPag != ""){
            txtScript = "Sr(a). " + nomeCli +" informa que efetuou o pagamento do boleto com vencimento " + dtVencBoleto + 
            ", no dia " + dtPag +
            ".&#013;Não foi possível realizar o informe de pagamento, devido ao histórico de informes realizados." +
            "&#013Cliente orientado a aguardar a compensação bancária que pode ocorrer em até 2 dias úteis." +
            "&#013;&#013;" + nomeCli + " - " + txtTel;
            document.getElementById('scriptEnd').innerHTML = txtScript; 
        }
        else {
            txtScript = "Sr(a). " + nomeCli +" informa que efetuou o pagamento do boleto com vencimento " + dtVencBoleto +
            ".&#013;Não foi possível realizar o informe de pagamento, devido ao histórico de informes realizados." +
            "&#013Cliente orientado a aguardar a compensação bancária que pode ocorrer em até 2 dias úteis." +
            "&#013;&#013;" + nomeCli + " - " + txtTel;
            document.getElementById('scriptEnd').innerHTML = txtScript; 
        }
    }
	    //Acompanhar Field ou LOSS
        if (capturar == "chTecAcompanhar"){
        txtScript = "Sr(a). " + nomeCli +" entra em contato solicitando informações sobre o chamado que está aberto. Cliente foi orientado a aguardar o prazo." +
        "&#013;&#013;" + nomeCli + " - " + txtTel;
        document.getElementById('scriptEnd').innerHTML = txtScript;
  }
    //encerramento Cancelamento
    if (capturar == "ch_Cancelamento"){
        txtScript = "Sr(a). " + nomeCli +" entra em contato solicitando cancelamento." + 
        "&#013;&#013;• Motivo: " +
        "&#013;• Solicitante do cancelamento é o titular e os dados foram confirmados. " +
        "&#013;• Cliente foi informado sobre multa contratual. " +
        "&#013;• Foi informado ao cliente que haverá proporcional dos dias utilizados. " +
        "&#013;• Está ciente que será marcada visita técnica para devolução de equipamentos e que a não devolução dos equipamentos irá gerar uma taxa. " +
        "&#013;• Cliente está ciente que o setor responsável entrará em contato em até 2 dias úteis. " +
		"&#013;&#013;Melhor horário para contato: " +
        "&#013;&#013;E-mail confirmado: " +
        "&#013;Telefones confirmados: " + txtTel +
        "&#013;&#013;" + nomeCli + " - " + txtTel;
        document.getElementById('scriptEnd').innerHTML = txtScript;
    }

    //Mudar data de vencimento
    if (capturar == "chFinVencimento"){
        txtScript = "Sr(a). " + nomeCli +" entra em contato solicitando alteração na data de vencimento." + 
        "&#013;Cliente não possui débitos em aberto. Dados foram validados. " +
        "&#013;&#013;Data de vencimento antiga: " +
        "&#013;Nova data de vencimento: " +
        "&#013;&#013;Ciente do cálculo do proporcional que virá na próxima fatura. " +   
        "&#013;&#013;" + nomeCli + " - " + txtTel;
        document.getElementById('scriptEnd').innerHTML = txtScript;
    }

    //Transferência Interna
    if (capturar == "chFinTransInterna"){
        txtScript = "Sr(a). " + nomeCli +" entra em contato solicitando Transferência Interna da ONU." + 
        "&#013;Cliente não possui débitos em aberto. Dados foram validados. " +
        "&#013;Foi informado valor do serviço de R$ 100,00 (cem reais) e cliente deseja que parcele em 2 vezes. " +
        "&#013;&#013;Cômodo antigo: " +
        "&#013;Novo cômodo: " +
        "&#013;&#013;Cliente está ciente do prazo de 07 dias úteis para execução do chamado e que o setor de agendamento técnico entrará em contato para marcar data e hora. " +   
        "&#013;&#013;Telefones confirmados com cliente: " + txtTel +
        "&#013;&#013;" + nomeCli + " - " + txtTel;
        document.getElementById('scriptEnd').innerHTML = txtScript;
    }

    //Reativação
    if (capturar == "chFinReativacao"){
        txtScript = "Sr(a). " + nomeCli +" entra em contato solicitando Reativação do seu contrato." + 
        "&#013;Cliente informa que já pagou primeira parcela da negociação. Dados foram validados. " +
        "&#013;• Cliente informa que está em posse dos equipamentos." +
        "&#013;• Tem menos de 120 dias de cancelado. " +
        "&#013;&#013;Confirmado endereço de instalação: " + 
        "&#013;• Está ciente do prazo de 03 dias úteis para o setor responsável entrar em contato e reativar o contrato. " +     
        "&#013;&#013;Telefones confirmados com cliente: " + txtTel +
        "&#013;&#013;" + nomeCli + " - " + txtTel;
        document.getElementById('scriptEnd').innerHTML = txtScript;
    }    
    //Suspensão temporária
    if (capturar == "chFinSuspensao"){
        dtVencBoleto = document.getElementById('dtvencBol').value.substr(0, 10).split('-').reverse().join('/');
        txtScript = "Sr(a). " + nomeCli +" entra em contato solicitando Suspensão Temporária." + 
        "&#013;Cliente não possui débitos em aberto. Dados foram validados.  " +
        "&#013;&#013;Início da Suspensão: " + dtVencBoleto +
        "&#013;Prazo da suspensão: 120 dias. " +
        "&#013;&#013;Ciente do cálculo do proporcional que virá na próxima fatura referente a utilização até a data atual. Cliente foi informada que pode retomar o serviço antes do prazo. " + 
        "&#013;&#013;" + nomeCli + " - " + txtTel;
        document.getElementById('scriptEnd').innerHTML = txtScript;
    }
    //Chamado de Vulto - EDITAVEL
    if (capturar == "chVulto"){
        txtScript = "Cliente entra em contato informando que está sem conexão. Orientado a aguardar o prazo inicial de normalização - SLA 4h. "+
        "&#013;&#013;" + nomeCli + " - " + txtTel;
        document.getElementById('scriptEnd').innerHTML = txtScript;
    }
    //Transferência de Titularidade
    if (capturar == "chFinTitularidade"){
        txtScript = "Sr(a). " + nomeCli +" entra em contato solicitando Transferência de Titularidade do seu contrato." + 
        "&#013;Verificado que cliente não possui débitos vencidos. Dados foram validados. " +
        "&#013;• Cliente está ciente e CONCORDA com a cobrança de taxa de R$ 100.00 (cem reais)." +
        "&#013;• Está ciente que a área responsável irá enviar o termo por e-mail em até 2 dias úteis. Ao receber o termo deverá devolver assinado, junto dos documentos (Identidade, CNH ou outro documento com foto) digitalizados do atual e do novo titular para faturamento@loga.net.br em até 2 dias úteis ou seu chamado será encerrado automaticamente. " +
        "&#013;• Informei que o prazo para mudança definitiva do titular é de 07 (sete) dias úteis após o recebimento do termo assinado e documentações solicitadas. " +     
        "&#013;&#013;DADOS DO NOVO TITULAR:" +     
        "&#013;Nome completo/Razão Social:" +        
        "&#013;CPF e RG/CNPJ:" +     
        "&#013;Data de nascimento:" +        
        "&#013;E-mail:" +     
        "&#013;Telefone:" +      
        "&#013;&#013;Telefones confirmados com cliente: " + txtTel +
        "&#013;E-mail confirmado com cliente: " +        
        "&#013;&#013;" + nomeCli + " - " + txtTel;
        document.getElementById('scriptEnd').innerHTML = txtScript;
    }      

    //Desconto em fatura antes do vencimento
    if (capturar == "chFinDesconto"){
        txtScript = "Cliente entra em contato solicitando informações sobre desconto na fatura. Informado que pagando até o dia do vencimento será concedido o desconto de R$ 5.00. "+
        "&#013;&#013;" + nomeCli + " - " + txtTel;
        document.getElementById('scriptEnd').innerHTML = txtScript;
    }

    //Duvida de dois contratos nda fatura
       if (capturar == "chFinDoisCOntratos"){
        txtScript = "Cliente entra em contato solicitando informações sobre dois contratos no detalhamento da fatura. Informado que o cliente possui somente um contrato conosco e que a Loga subdivide em dois contratos devido a questões internas do financeiro. Cliente aceita informação. "+
        "&#013;&#013;" + nomeCli + " - " + txtTel;
        document.getElementById('scriptEnd').innerHTML = txtScript;
    } 

    //Dúvida de proporcional
    if (capturar == "chFinProporcional"){
        txtScript = "Sr(a). " + nomeCli +" entra em contato solicitando informações sobre fatura proporcional. Informei que a primeira fatura é cobrado o proporcional do que foi utilizado e as próximas faturas virão com valor cheio/normal de acordo com contratação. "+
        "&#013;&#013;" + nomeCli + " - " + txtTel;
        document.getElementById('scriptEnd').innerHTML = txtScript;
    } 

    //Dúvida - Boleto não registrado 
    if (capturar == "chFinNRegistrado"){
        txtScript = "Sr(a). " + nomeCli +" entra em contato informando que tentou pagar o boleto com vencimento em " + dtVencBoleto + ", porém apresentou a mensagem de - Boleto não registrado -. Cliente foi orientado a tentar efetuar o pagamento daqui há 3 dias úteis." +
        "&#013;&#013;" + nomeCli + " - " + txtTel;
        document.getElementById('scriptEnd').innerHTML = txtScript;
    } 

    //Mudar senha Wi-Fi
    if (capturar == "chWiFi"){
        txtScript = "Sr(a). " + nomeCli +" entra em contato solicitando mudança de senha Wi-Fi." + 
        "&#013;Dados do titular foram validados. " +
        "&#013;&#013;Senha alterada para: " +
        "&#013;&#013;" + nomeCli + " - " + txtTel;
        document.getElementById('scriptEnd').innerHTML = txtScript;
    }

    //Desconto por Link Interrompido
    if (capturar == "chDesconto"){
        txtScript = "Sr(a). " + nomeCli +" entra em contato solicitando DESCONTO por link interrompido." + 
        "&#013;Cliente ficou sem conexão em: " +
        "&#013;&#013;Protocolo(s) de chamado(s) técnico(s): " +
        "&#013;&#013;" + nomeCli + " - " + txtTel;
        document.getElementById('scriptEnd').innerHTML = txtScript;
    }

//copiar script
document.getElementById('btnCopy').addEventListener("click", function(){
    document.getElementById('scriptEnd').select();
    document.execCommand('copy');
});

document.getElementById('btnLimpar').addEventListener("click", function(){
    document.getElementById('scriptEnd').innerHTML = "";
});
