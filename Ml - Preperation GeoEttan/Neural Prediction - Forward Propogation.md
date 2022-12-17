
![[Neural Prediction - Forward Propogation 2022-11-28 21.28.47.excalidraw]]

#### Sample Program To Show How Prediction Works 
![ ]https://colab.research.google.com/drive/1h4K69UEit8LFlp9n8W3y1O7IJYBgBpG0?usp=sharing

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



##### Sample Neural Networks with multiple inputs : 
```python 
weights = [0.1, 0.2, 0] def neural_network(input, weights): pred = w_sum(input,weights) return pred
toes = [8.5, 9.5, 9.9, 9.0] wlrec = [0.65, 0.8, 0.8, 0.9] nfans = [1.2, 1.3, 0.5, 1.0] input = [toes[0],wlrec[0],nfans[0]] pred = neural_network(input,weights)
def w_sum(a,b): assert(len(a) == len(b)) output = 0 for i in range(len(a)): output += (a[i] * b[i]) return output
def neural_network(input, weights): pred = w_sum(input,weights) return predtoes = [8.5, 9.5, 9.9, 9.0] wlrec = [0.65, 0.8, 0.8, 0.9] nfans = [1.2, 1.3, 0.5, 1.0] input = [toes[0],wlrec[0],nfans[0]] pred = neural_network(input,weights) print(pred)
```
