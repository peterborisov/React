import { memo } from "react";
import * as React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

import { useNotes } from "../../provider";

const Note = ({ note }) => {
  const { actions } = useNotes();
  return (
    <div onClick={() => actions.deleteNote({ id: note.id })}>
      <Card>
        <CardContent>
          <Typography variant="h5" component="div">
            Title: {note.title}
          </Typography>
          <Typography variant="body2">
            Description: {note.description}
          </Typography>
          <Typography variant="body2">
            ID: {note.id}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
};

export default memo(Note);