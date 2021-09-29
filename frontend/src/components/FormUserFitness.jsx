import React, { Component } from 'react'
import {
  FormControl,
  Checkbox,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  Button,
  Typography,
  AppBar,
} from '@material-ui/core'

export class FormUserFitness extends Component {
  continue = e => {
    e.preventDefault()
    this.props.nextStep()
  }

  back = e => {
    e.preventDefault()
    this.props.prevStep()
  }

  render() {
    const { values, handleChange } = this.props

    return (
      <React.Fragment>
        <AppBar position='sticky'>
          <Typography
            variant="h4"
            component="div"
            sx={{ flexGrow: 1 }}
          >
            Nos conte sobre sua rotina de atividade física!
          </Typography>
        </AppBar>
        <br />

        <FormControl component="fieldset" style={styles.questionContainer}>
          <FormLabel component="legend" style={styles.labelText}>Pensando no seu dia a dia, você classifica o seu nível de atividade física:</FormLabel>
          <RadioGroup style={{
            justifyContent: 'center',
            alignItems: 'center',
          }} row>
            <FormControlLabel labelPlacement='top' value="1" control={<Radio />} label="Sedentário" />
            <FormControlLabel labelPlacement='top' value="2" control={<Radio />} label="Pouco Ativo" />
            <FormControlLabel labelPlacement='top' value="3" control={<Radio />} label="Ativo" />
            <FormControlLabel labelPlacement='top' value="4" control={<Radio />} label="Muito Ativo" />
          </RadioGroup>
        </FormControl>

        <FormControl component="fieldset" style={styles.questionContainer}>
          <FormLabel component="legend" style={styles.labelText}>Em relação ao seu nível de atividade física, assinale a opção que você mais se identifica: </FormLabel>
          <RadioGroup>
            <FormControlLabel value="1" control={<Radio />} label="Não penso em mudar" />
            <FormControlLabel value="2" control={<Radio />} label="Estou pensando em mudar, mas ainda não estou muito certo disso" />
            <FormControlLabel value="3" control={<Radio />} label="Decidi mudar e só estou pensando em como fazer" />
            <FormControlLabel value="4" control={<Radio />} label="Já estou mudando, mas estou com dificuldades" />
            <FormControlLabel value="5" control={<Radio />} label="Já estou mudando e com sucesso" />
          </RadioGroup>
        </FormControl>

        <FormControl component="fieldset" style={styles.questionContainer}>
          <FormLabel component="legend" style={styles.labelText}>Quantos minutos de exercício de intensidade BAIXA (ou seja sem esforço ou esforço leve) você faz por semana? Exemplo: caminhada leve,
            tênis de mesa, yoga leve, pilates, hidro ginástica, etc. Leve em consideração a sua percepção de esforço.</FormLabel>
          <RadioGroup>
            <FormControlLabel value="1" control={<Radio />} label="0 a 10 minutos/semana" />
            <FormControlLabel value="2" control={<Radio />} label="10 a 60 minutos/semana" />
            <FormControlLabel value="3" control={<Radio />} label="60 a 150 minutos/semana" />
            <FormControlLabel value="4" control={<Radio />} label="> 150 minutos/semana" />
          </RadioGroup>
        </FormControl>

        <FormControl component="fieldset" style={styles.questionContainer}>
          <FormLabel component="legend" style={styles.labelText}> Quantos minutos de exercício de intensidade ALTA (ou seja, esforço cansativo ou extremamente cansativo)
            você faz por semana? Exemplos de atividades: corrida de fundo, natação de fundo e ciclismo estrada, triatlo,
            patinação, futebol, handebol, basquete competitivo, cross fit, boxe, wrestling, etc. Leve em consideração a sua percepção de esforço.  </FormLabel>
          <RadioGroup>
            <FormControlLabel value="1" control={<Radio />} label="0 a 10 minutos/semana" />
            <FormControlLabel value="2" control={<Radio />} label="10 a 60 minutos/semana" />
            <FormControlLabel value="3" control={<Radio />} label="60 a 150 minutos/semana" />
            <FormControlLabel value="4" control={<Radio />} label="> 150 minutos/semana" />
          </RadioGroup>
        </FormControl>

        <FormControl component="fieldset" style={styles.questionContainer}>
          <FormLabel component="legend" style={styles.labelText}> O que te motiva ou poderia motivar para se exercitar? </FormLabel>
          <FormControlLabel control={<Checkbox />} label="Nada poderia me motivar" />
          <FormControlLabel control={<Checkbox />} label="Família ou companheira/companheiro" />
          <FormControlLabel control={<Checkbox />} label="Melhora de humor" />
          <FormControlLabel control={<Checkbox />} label="Ter uma vida mais saudável" />
          <FormControlLabel control={<Checkbox />} label="Imagem corporal/estética" />
          <FormControlLabel control={<Checkbox />} label="Aumento de energia/disposição" />
          <FormControlLabel control={<Checkbox />} label="Melhora do sono" />
          <FormControlLabel control={<Checkbox />} label="Aumento da autoestima" />
          <FormControlLabel control={<Checkbox />} label="Melhorar a saúde mental" />
          <FormControlLabel control={<Checkbox />} label="Emagrecimento" />
          <FormControlLabel control={<Checkbox />} label="Performance" />
        </FormControl>

        <FormControl component="fieldset" style={styles.questionContainer}>
          <FormLabel component="legend" style={styles.labelText}> Existem BARREIRAS ou PROBLEMAS que limitam o exercício? Marque todos os que se aplicam: </FormLabel>
          <FormControlLabel control={<Checkbox />} label="Nenhuma" />
          <FormControlLabel control={<Checkbox />} label="Psicológica (Depressão, Medo, Ansiedade)" />
          <FormControlLabel control={<Checkbox />} label="Custo" />
          <FormControlLabel control={<Checkbox />} label="Tempo (Responsabilidade Familiar, Trabalho)" />
          <FormControlLabel control={<Checkbox />} label="Não gosta" />
          <FormControlLabel control={<Checkbox />} label="Roupas apropriadas" />
          <FormControlLabel control={<Checkbox />} label="Cansaço ou falta de energia" />
          <FormControlLabel control={<Checkbox />} label="Indisciplina" />
          <FormControlLabel control={<Checkbox />} label="Lesões articulares" />
          <FormControlLabel control={<Checkbox />} label="Dor muscular limitante" />
          <FormControlLabel control={<Checkbox />} label="Dificuldade respiratória" />
          <FormControlLabel control={<Checkbox />} label="Problema de equilíbrio ou queda nos últimos 6 meses" />
          <FormControlLabel control={<Checkbox />} label="Limitações físicas para realizar suas atividades diárias" />
          <FormControlLabel control={<Checkbox />} label="Falta de local adequado" />
          <FormControlLabel control={<Checkbox />} label="Outros" />
        </FormControl>

        <br />
        <Button
          color="secondary"
          variant="contained"
          style={styles.buttonBack}
          onClick={this.back}
        > Voltar </Button>

        <Button
          color="primary"
          variant="contained"
          style={styles.buttonContinue}
          onClick={this.continue}
        > Continuar </Button>
      </React.Fragment>
    )
  }
}

const styles = {
  buttonContinue: {
    marginLeft: 15,
    marginRight: 15,
    marginBottom: 15,
    backgroundColor: "#21b6ae",
  },
  buttonBack: {
    marginLeft: 15,
    marginRight: 15,
    marginBottom: 15,
    backgroundColor: '#999999',
    color: '#FFFFFF'
  },
  questionContainer: {
    flex: 1,
    border: '2px solid gray',
    borderRadius: 15,
    padding: 20,
    width: '50%',
    marginBottom: 50,
  },
  labelText: {
    fontSize: 20,
    paddingLeft: 10,
    paddingRight: 10,
  }
}

export default FormUserFitness