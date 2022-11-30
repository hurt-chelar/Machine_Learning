
![[Neural Prediction - Forward Propogation 2022-11-28 21.28.47.excalidraw]]

#### Sample Program To Show How Prediction Works 
https://colab.research.google.com/drive/1h4K69UEit8LFlp9n8W3y1O7IJYBgBpG0?usp=sharing

```python 
weight = 0.1

  

def neural_network(input, weight):

prediction = input * weight

return prediction

number_of_toes = [8.5,9.5,10,9]

for i in range(len(number_of_toes)):

input = number_of_toes[i]

predict = neural_network(input, weight)

print(predict)
```