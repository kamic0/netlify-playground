import * as React from 'react'
import { withStyles, WithStyles } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import IconLabel from '../molecules/IconLabel'

// TODO:
const styles = {
  footer: {
    display: 'flex',
    margin: '24px auto 0 auto',
    width: '100%',
    height: '256px',
    backgroundColor: '#CFD8DC',
    userSelect: 'none'
  },
  container: {
    width: '1024px',
    margin: 'auto',
    textAlign: 'center'
  }
}

type Props = {
  classes: {
    [key: string]: string
  }
}

/**
 * Footer Component
 *
 * @param {*} props
 * @returns
 */
const component: React.SFC<Props> = (props: Props) => {
  const { classes } = props
  const issuedYear = new Date().getFullYear().toString()
  const copyrightLabel = `2018 - ${issuedYear} kamic0`

  return (
    <CssBaseline>
      <footer className={classes.footer}>
        <small className={classes.container}>
          <IconLabel label={copyrightLabel} iconType="copyright" />
        </small>
      </footer>
    </CssBaseline>
  )
}

export default withStyles(styles)(component)
