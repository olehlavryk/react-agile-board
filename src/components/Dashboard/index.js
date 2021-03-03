import React, { useCallback } from "react";
import { observer } from "mobx-react-lite";
import { Box, Grid, Paper, Typography, Button } from "@material-ui/core";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import useStore from "src/hooks/useStore";
import Column from "src/components/Dashboard/Column";

function getListStyle(isDraggingOver) {
  return {
    backgroundColor: isDraggingOver ? "lightblue" : "lightgray",
    padding: 8,
    minHeight: 500,
  };
}

const Dashboard = () => {
  const { boards } = useStore();

  const onDragEnd = useCallback(
    (event) => {
      const { source, destination, draggableId: taskId } = event;
      boards.active.moveTask(taskId, source, destination);
    },
    [boards]
  );

  return (
    <Box p={2}>
      <DragDropContext onDragEnd={onDragEnd}>
        <Grid container spacing={3}>
          {boards?.active?.sections.map((section) => {
            return (
              <Grid item key={section.id} xs>
                <Paper>
                  <Box
                    p={1}
                    display="flex"
                    alignItems="center"
                    justifyContent="space-between"
                  >
                    <Typography variant="h5">{section.title}</Typography>
                    <Button
                      variant="outlined"
                      color="primary"
                      onClick={() => {}}
                    >
                      ADD
                    </Button>
                  </Box>
                  <Droppable droppableId={section.id} key={section.id}>
                    {(provided, snapshot) => (
                      <div
                        {...provided.droppableProps}
                        ref={provided.innerRef}
                        style={getListStyle(snapshot.isDraggingOver)}
                      >
                        <Column section={section} />
                        {provided.placeholder}
                      </div>
                    )}
                  </Droppable>
                </Paper>
              </Grid>
            );
          })}
        </Grid>
      </DragDropContext>
    </Box>
  );
};

export default observer(Dashboard);
