# A* checker

### prerequisites

You can visualize the A* algorithm steps with this tool.
all you need is to add this code to your project:

```python
def summarise_graph(graph: StampGraph):
    global times # define times as global variable
    times += 1
    #parent id of the root must be some unique value
    print(graph.id, graph.parent_id) 
    print(*graph.stamp_list, sep=' ')
    print(graph.g, graph.h)
    print()
```

call this function when your algorithm choose next state. do not call this function in neighbor states.

After adding this code to your project, run your code and copy the output. This output is "StepList"

### Graph Form

Inputs can be in two forms:

1. Graph description
    1. First line: number of nodes
    2. Second line: number of edges
    3. Next lines: edges list (In Quera Format)
    4. StepsList

2. Graph json : Use this form for pre-defined test cases

### My Implementation

You can see your algorithm steps after submitting the inputs.
Each States stands for a unique combination of stamps and nodes.
You can see the H and G value of each state.

If you click on a state(node) you can see the graph structure and labels placement.

### Pre-defined Test Cases

You can use pre-defined test cases for your algorithm. (i didn't have enough time for adding good test cases. So there
is a space to contribute =) )

