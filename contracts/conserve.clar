;; Conservation Fund Contract
;; Clarity Version 4

(define-constant ERR_NOT_AUTHORIZED (err u100))
(define-constant ERR_INVALID_AMOUNT (err u101))

(define-data-var fund-balance uint u0)
(define-data-var contract-owner principal tx-sender)

(define-read-only (get-owner)
  (ok (var-get contract-owner))
)

(define-read-only (get-balance)
  (ok (var-get fund-balance))
)

(define-public (deposit (amount uint))
  (begin
    (asserts! (> amount u0) ERR_INVALID_AMOUNT)
    (try! (stx-transfer? amount tx-sender (as-contract tx-sender)))
    (var-set fund-balance (+ (var-get fund-balance) amount))
    (ok true)
  )
)

(define-public (withdraw (amount uint) (recipient principal))
  (ok true)
)
